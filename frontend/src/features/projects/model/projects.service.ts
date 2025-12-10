import { projectsEndpoints, GetProjectsParams } from '@/lib/api/endpoints/projects';
import { Project, ProjectPreview } from './types';

export class ProjectsService {
  private projectsCache: Project[] | null = null;
  private lastFetchTime: number = 0;
  private readonly CACHE_TTL = 10 * 60 * 1000; // 10 минут кэша

  // Получение проектов с фильтрацией и пагинацией
  async getAll(params?: GetProjectsParams): Promise<{ data: Project[]; total: number }> {
    const { category, limit = 12, offset = 0 } = params || {};
    
    // Для главной страницы используем кэш для превью
    if (category === 'all' && offset === 0 && limit <= 12) {
      const now = Date.now();
      if (this.projectsCache && now - this.lastFetchTime < this.CACHE_TTL) {
        const total = this.projectsCache.length;
        const data = this.projectsCache.slice(offset, offset + limit);
        return { data, total };
      }
    }

    try {
      const response = await projectsEndpoints.getAll(params);
      
      // Обновляем кэш если это первая загрузка всех проектов
      if (category === 'all' && offset === 0 && !limit) {
        this.projectsCache = response.data;
        this.lastFetchTime = Date.now();
      }
      
      return response;
    } catch (error) {
      console.error('Error fetching projects:', error);
      
      // Возвращаем пустой массив в случае ошибки
      return { data: [], total: 0 };
    }
  }

  // Получение превью проектов (для главной страницы)
  async getPreview(limit?: number, category?: string): Promise<ProjectPreview[]> {
    // Для главной: максимум 6 проектов на категорию, 12 всего
    const effectiveLimit = category === 'all' ? 12 : 6;
    
    try {
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

  // Получение уникальных категорий
  async getCategories(): Promise<Array<{ value: string; label: string }>> {
    try {
      return await projectsEndpoints.getCategories();
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Получение связанных проектов (по категории)
  async getRelated(slug: string, limit: number = 3): Promise<ProjectPreview[]> {
    try {
      const project = await this.getBySlug(slug);
      if (!project) return [];

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
    } catch (error) {
      console.error('Error fetching related projects:', error);
      return [];
    }
  }
}

export const projectsService = new ProjectsService();