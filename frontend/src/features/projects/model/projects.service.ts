import { projectsEndpoints, GetProjectsParams } from '@/lib/api/endpoints/projects';
import { servicesService } from '@/features/services/model/services.service';
import { Project, ProjectPreview } from './types';

export class ProjectsService {
  private projectsCache: Project[] | null = null;
  private lastFetchTime: number = 0;
  private readonly CACHE_TTL = 10 * 60 * 1000; // 10 минут кэша

  // Основной метод - получает все проекты с фильтрацией
  async getAll(params?: GetProjectsParams): Promise<{ data: Project[]; total: number }> {
    const { serviceSlug = 'all', limit = 12, offset = 0 } = params || {};
    
    try {
      const response = await projectsEndpoints.getAll({
        serviceSlug,
        limit,
        offset
      });
      
      // Кэшируем только первую страницу всех проектов
      if (serviceSlug === 'all' && offset === 0 && limit <= 12) {
        this.projectsCache = response.data;
        this.lastFetchTime = Date.now();
      }
      
      return response;
    } catch (error) {
      console.error('Error fetching projects:', error);
      
      // Если есть закэшированные данные, возвращаем их
      if (this.projectsCache && serviceSlug === 'all') {
        console.warn('Returning cached projects due to API error');
        const total = this.projectsCache.length;
        const data = this.projectsCache.slice(offset, offset + (limit || total));
        return { data, total };
      }
      
      return { data: [], total: 0 };
    }
  }

  // Получение превью проектов для главной страницы
  async getPreview(serviceSlug?: string): Promise<ProjectPreview[]> {
    // Правила для главной страницы:
    // - Если выбрана услуга: максимум 6 проектов из этой услуги
    // - Если "Все проекты": максимум 12 проектов (по 1-2 из каждой услуги)
    const limit = serviceSlug === 'all' || !serviceSlug ? 12 : 6;
    
    try {
      return await projectsEndpoints.getPreview({ 
        serviceSlug, 
        limit 
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

  // Получение фильтров (всегда 8 услуг + "Все проекты")
  async getFilters(): Promise<Array<{ value: string; label: string }>> {
    try {
      // Получаем активные услуги
      const services = await servicesService.getActive();
      
      // Создаем фильтры из услуг
      const serviceFilters = services.map(service => ({
        value: service.slug,
        label: service.title
      }));
      
      // Добавляем фильтр "Все проекты" первым
      return [
        { value: 'all', label: 'Все проекты' },
        ...serviceFilters
      ];
    } catch (error) {
      console.error('Error fetching service filters:', error);
      
      // Fallback: возвращаем дефолтные фильтры
      return [
        { value: 'all', label: 'Все проекты' },
        { value: 'web-development', label: 'Веб-разработка' },
        { value: 'mobile-development', label: 'Мобильная разработка' },
        { value: 'it-infrastructure', label: 'IT-инфраструктура' },
        { value: 'ai-integration', label: 'Интеграция ИИ' },
        { value: 'data-analytics', label: 'Аналитика данных' },
        { value: 'cybersecurity', label: 'Кибербезопасность' },
        { value: 'cloud-services', label: 'Облачные сервисы' },
        { value: 'support', label: 'Поддержка' }
      ];
    }
  }
}

export const projectsService = new ProjectsService();