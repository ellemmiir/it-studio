'use client';

import { useState, useEffect, useCallback } from 'react';
import { servicesService } from './services.service';
import { Service } from './types';

// Хук для получения всех услуг
export const useServices = () => {
  const [data, setData] = useState<Service[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await servicesService.getAll();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchServices 
  };
};

// Хук для получения активных услуг (используется в Header/Footer)
export const useActiveServices = () => {
  const [data, setData] = useState<Service[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActiveServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await servicesService.getActive();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActiveServices();
  }, [fetchActiveServices]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchActiveServices 
  };
};

// Хук для получения конкретной услуги по slug
export const useServiceBySlug = (slug: string) => {
  const [data, setData] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchService = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await servicesService.getBySlug(slug);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      fetchService();
    } else {
      setLoading(false);
    }
  }, [slug, fetchService]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchService 
  };
};