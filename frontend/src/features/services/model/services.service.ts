import { servicesEndpoints } from '@/lib/api/endpoints/services';
import { Service } from './types';

export class ServicesService {
  private servicesCache: Service[] | null = null;
  private lastFetchTime: number = 0;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 минут кэша

  // Основной метод - получает все услуги
  async getAll(forceRefresh = false): Promise<Service[]> {
    const now = Date.now();
    
    // Используем кэш если он есть и не устарел
    if (!forceRefresh && 
        this.servicesCache && 
        now - this.lastFetchTime < this.CACHE_TTL) {
      return this.servicesCache;
    }

    try {
      this.servicesCache = await servicesEndpoints.getAll();
      this.lastFetchTime = now;
      return this.servicesCache;
    } catch (error) {
      console.error('Error fetching services:', error);
      
      // Если есть закэшированные данные, возвращаем их
      if (this.servicesCache) {
        console.warn('Returning cached services due to API error');
        return this.servicesCache;
      }
      
      return [];
    }
  }

  // Только активные услуги (фильтруем из всех)
  async getActive(): Promise<Service[]> {
    const services = await this.getAll();
    return services.filter(service => service.isActive);
  }

  // Получение услуги по slug (ищем в общем списке)
  async getBySlug(slug: string): Promise<Service | null> {
    const services = await this.getAll();
    const service = services.find(s => s.slug === slug);
    
    if (!service) {
      console.warn(`Service with slug "${slug}" not found`);
    }
    
    return service || null;
  }

  // Получение нескольких услуг по slugs (фильтруем из всех)
  async getBySlugs(slugs: string[]): Promise<Service[]> {
    const services = await this.getAll();
    return services.filter(service => slugs.includes(service.slug));
  }
}

export const servicesService = new ServicesService();