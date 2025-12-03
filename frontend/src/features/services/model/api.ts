import { Service } from './types';
import { servicesApi } from '@/lib/api/endpoints';

export async function getServices(): Promise<Service[]> {
  try {
    return await servicesApi.getServices();
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getActiveServices(): Promise<Service[]> {
  try {
    const services = await servicesApi.getServices();
    return services.filter(service => service.isActive);
  } catch (error) {
    console.error('Error fetching active services:', error);
    return [];
  }
}

// НОВАЯ ФУНКЦИЯ: Получение услуги по slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    // Используем servicesApi вместо прямого fetch
    return await servicesApi.getServiceBySlug(slug);
  } catch (error) {
    // Обрабатываем 404 отдельно
    if (error instanceof Error && error.message === 'NOT_FOUND') {
      console.log(`Service with slug "${slug}" not found (404)`);
      return null;
    }
    
    console.error(`Error fetching service by slug "${slug}":`, error);
    
    // Fallback: если прямой запрос не работает, ищем среди всех услуг
    try {
      const services = await getServices();
      const service = services.find(s => s.slug === slug);
      
      if (!service) {
        console.warn(`Service "${slug}" not found in all services`);
        return null;
      }
      
      return service;
    } catch (fallbackError) {
      console.error(`Fallback also failed for "${slug}":`, fallbackError);
      return null;
    }
  }
}

// НОВАЯ ФУНКЦИЯ: Получение нескольких услуг по slugs
export async function getServicesBySlugs(slugs: string[]): Promise<Service[]> {
  try {
    return await servicesApi.getServicesBySlugs(slugs);
  } catch (error) {
    console.error("Error fetching services by slugs:", error);
    
    // Fallback: получаем все и фильтруем
    try {
      const services = await getServices();
      return services.filter(service => slugs.includes(service.slug));
    } catch (fallbackError) {
      console.error("Fallback also failed:", fallbackError);
      return [];
    }
  }
}