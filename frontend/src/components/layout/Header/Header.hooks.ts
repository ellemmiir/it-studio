import { useRef, useState, useEffect } from 'react';
import { getActiveServices } from '@/features/services/model/api';
import { Service } from '@/features/services/model/types';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const activeServices = await getActiveServices();

        if (!Array.isArray(activeServices)) {
          throw new Error('Invalid data format received from server');
        }

        setServices(activeServices);
      } catch (err) {
        console.error('Error loading services:', err);
        
        if (err instanceof Error) {
          setError(`Не удалось загрузить услуги: ${err.message}`);
        } else if (typeof err === 'string') {
          setError(`Не удалось загрузить услуги: ${err}`);
        } else {
          setError('Произошла неизвестная ошибка при загрузке услуг');
        }
        
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, []);

  const retry = () => {
    setError(null);
    setIsLoading(true);
    
    const loadServices = async () => {
      try {
        const activeServices = await getActiveServices();
        
        if (!Array.isArray(activeServices)) {
          throw new Error('Invalid data format received from server');
        }

        setServices(activeServices);
        setError(null);
      } catch (err) {
        console.error('Error retrying services load:', err);
        setError('Не удалось загрузить услуги. Пожалуйста, попробуйте позже.');
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  };

  return { 
    services, 
    isLoading, 
    error,
    retry 
  };
};

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    dropdownRef,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
};