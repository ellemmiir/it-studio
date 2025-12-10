import { apiClient } from '../client';
import { Service } from '@/features/services/model/types';

export const servicesEndpoints = {
  // Получение всех услуг
  getAll: (): Promise<Service[]> => 
    apiClient.get('/api/v1/services'),
  
  // Получение услуги по slug
  getBySlug: (slug: string): Promise<Service> => 
    apiClient.get(`/api/v1/services/${slug}`),
  
  // Получение нескольких услуг по slugs
  getBySlugs: (slugs: string[]): Promise<Service[]> => 
    apiClient.get('/api/v1/services/bulk', {
      method: 'POST',
      body: JSON.stringify({ slugs }),
    }),
};