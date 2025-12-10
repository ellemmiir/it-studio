import { projectsEndpoints, GetProjectsParams } from '@/lib/api/endpoints/projects';
import { servicesService } from '@/features/services/model/services.service'; // Импортируем сервис услуг
import { Project, ProjectPreview } from './types';
import { Service } from '@/features/services/model/types'; // Импортируем тип услуги

export class ProjectsService {
  private projectsCache: Project[] | null = null;
  private lastFetchTime: number = 0;
  private readonly CACHE_TTL = 10 * 60 * 1000; // 10 минут кэша

  // Получение проектов с фильтрацией и пагинацией
  async getAll(params?: GetProjectsParams): Promise<{ data: Project[]; total: number }> {
    const { category, limit = 12, offset = 0 } = params || {};
    
    try {
      const response = await projectsEndpoints.getAll(params);
      return response;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return { data: [], total: 0 };
    }
  }

  // Получение превью проектов (для главной страницы)
  async getPreview(limit?: number, serviceSlug?: string): Promise<ProjectPreview[]> {
    // Для главной: максимум 6 проектов на услугу, 12 всего
    const effectiveLimit = serviceSlug === 'all' ? 12 : 6;
    
    try {
      // Если передана услуга, получаем ее tag и фильтруем по нему
      let category;
      if (serviceSlug && serviceSlug !== 'all') {
        const service = await servicesService.getBySlug(serviceSlug);
        if (service) {
          // Берем первый тег услуги как категорию для фильтрации проектов
          // Или можно создать маппинг между услугами и категориями проектов
          category = this.mapServiceToProjectCategory(service);
        }
      }
      
      return await projectsEndpoints.getPreview({ 
        limit: effectiveLimit, 
        category 
      });
    } catch (error) {
      console.error('Error fetching project previews:', error);
      return [];
    }
  }

  // Получение проекта по slug
  async getBySlug(slug: string): Promise<Project | null> {
    try {
      return await projectsEndpoints.getBySlug(slug);
    } catch (error) {
      console.error(`Error fetching project ${slug}:`, error);
      return null;
    }
  }

  // Получение фильтров на основе услуг
  async getFilters(): Promise<Array<{ value: string; label: string }>> {
    try {
      const services = await servicesService.getActive();
      
      // Создаем фильтры из активных услуг
      const filters = services.map(service => ({
        value: service.slug, // Используем slug услуги как значение фильтра
        label: service.title // Название услуги как label
      }));
      
      // Добавляем фильтр "Все проекты" первым
      return [
        { value: 'all', label: 'Все проекты' },
        ...filters
      ];
    } catch (error) {
      console.error('Error fetching filters:', error);
      return [{ value: 'all', label: 'Все проекты' }];
    }
  }

  // Получение уникальных категорий проектов (для внутреннего использования)
  async getCategories(): Promise<Array<{ value: string; label: string }>> {
    try {
      const categories = await projectsEndpoints.getCategories();
      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Маппинг услуги на категорию проекта
  private mapServiceToProjectCategory(service: Service): string | undefined {
    // Пример маппинга: можно хранить соответствие в конфиге или в базе
    const serviceToCategoryMap: Record<string, string[]> = {
      // slug услуги: [категории проектов]
      'web-development': ['software-development', 'mobile-development'],
      'mobile-development': ['mobile-development', 'software-development'],
      'it-infrastructure': ['it-infrastructure', 'devops'],
      'ai-integration': ['ai-integration', 'data-analytics'],
      'data-analytics': ['data-analytics', 'ai-integration'],
      'cybersecurity': ['cybersecurity', 'it-infrastructure'],
      'cloud-services': ['devops', 'it-infrastructure'],
      'support': ['it-infrastructure', 'software-development']
    };
    
    const categories = serviceToCategoryMap[service.slug];
    return categories ? categories[0] : undefined; // Берем первую категорию
  }

  // Получение связанных проектов (по услуге)
  async getRelated(slug: string, limit: number = 3): Promise<ProjectPreview[]> {
    try {
      const project = await this.getBySlug(slug);
      if (!project) return [];

      // Ищем услугу, соответствующую категории проекта
      const services = await servicesService.getActive();
      const relatedService = services.find(service => 
        this.mapServiceToProjectCategory(service) === project.category
      );

      if (!relatedService) {
        // Если не нашли услугу, просто возвращаем проекты из той же категории
        const { data } = await this.getAll({
          category: project.category,
          limit,
          offset: 0
        });

        // Исключаем текущий проект
        return data
          .filter(p => p.slug !== slug)
          .map(p => ({
            _id: p._id,
            title: p.title,
            description: p.description,
            category: p.category,
            tags: p.tags,
            image: p.image,
            slug: p.slug
          }))
          .slice(0, limit);
      }

      // Ищем проекты, связанные с этой услугой
      const category = this.mapServiceToProjectCategory(relatedService);
      if (!category) return [];

      const { data } = await this.getAll({
        category,
        limit,
        offset: 0
      });

      // Исключаем текущий проект
      return data
        .filter(p => p.slug !== slug)
        .map(p => ({
          _id: p._id,
          title: p.title,
          description: p.description,
          category: p.category,
          tags: p.tags,
          image: p.image,
          slug: p.slug
        }))
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching related projects:', error);
      return [];
    }
  }
}

export const projectsService = new ProjectsService();