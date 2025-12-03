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