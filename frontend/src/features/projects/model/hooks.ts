'use client';

import { useState, useEffect, useCallback } from 'react';
import { projectsService } from './projects.service';
import { Project, ProjectPreview } from './types';

interface UseProjectsParams {
  category?: string;
  limit?: number;
  offset?: number;
  enabled?: boolean;
}

// Хук для получения проектов с пагинацией
export const useProjects = (params: UseProjectsParams = {}) => {
  const { category = 'all', limit = 12, offset = 0, enabled = true } = params;
  
  const [data, setData] = useState<Project[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    if (!enabled) return;

    try {
      setLoading(true);
      setError(null);
      
      const response = await projectsService.getAll({ category, limit, offset });
      setData(response.data);
      setTotal(response.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [category, limit, offset, enabled]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { 
    data, 
    total,
    loading, 
    error,
    refetch: fetchProjects 
  };
};

// Хук для получения превью проектов (для главной страницы)
export const useProjectsPreview = (category?: string, limit?: number) => {
  const [data, setData] = useState<ProjectPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await projectsService.getPreview(limit, category);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [category, limit]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchProjects 
  };
};

// Хук для получения конкретного проекта по slug
export const useProjectBySlug = (slug: string) => {
  const [data, setData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = useCallback(async () => {
    if (!slug) return;

    try {
      setLoading(true);
      setError(null);
      const result = await projectsService.getBySlug(slug);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchProject 
  };
};

// Хук для получения категорий проектов
export const useProjectCategories = () => {
  const [data, setData] = useState<Array<{ value: string; label: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await projectsService.getCategories();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchCategories 
  };
};

// Хук для получения связанных проектов
export const useRelatedProjects = (slug: string, limit: number = 3) => {
  const [data, setData] = useState<ProjectPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRelated = useCallback(async () => {
    if (!slug) return;

    try {
      setLoading(true);
      setError(null);
      const result = await projectsService.getRelated(slug, limit);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [slug, limit]);

  useEffect(() => {
    fetchRelated();
  }, [fetchRelated]);

  return { 
    data, 
    loading, 
    error,
    refetch: fetchRelated 
  };
};