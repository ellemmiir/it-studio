import { apiClient } from './client';
import { Service } from '@/features/services/model/types';

export const servicesApi = {
  getServices: (): Promise<Service[]> => 
    apiClient.get('/api/v1/services'),
};

