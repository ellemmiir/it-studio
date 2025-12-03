// import { apiClient } from './client';
// import { Service } from '@/features/services/model/types';

// export const servicesApi = {
//   getServices: (): Promise<Service[]> => 
//     apiClient.get('/api/v1/services'),
// };


import { apiClient } from './client';
import { Service } from '@/features/services/model/types';

export const servicesApi = {
  getServices: (): Promise<Service[]> => 
    apiClient.get('/api/v1/services'),
  
  // Добавляем метод для получения услуги по slug
  getServiceBySlug: (slug: string): Promise<Service> => 
    apiClient.get(`/api/v1/services/${slug}`),
  
  // Добавляем метод для bulk запросов
  getServicesBySlugs: (slugs: string[]): Promise<Service[]> => 
    apiClient.get('/api/v1/services/bulk', {
      method: 'POST',
      body: JSON.stringify({ slugs }),
    }),
};