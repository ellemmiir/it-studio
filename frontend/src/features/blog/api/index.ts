// import { apiClient } from '@/lib/api/client';
// import { BlogPost, BlogApiResponse, BlogFilters } from '../model/types';

// export const blogApi = {
//   // Получить все посты с пагинацией и фильтрами
//   getPosts: (filters?: BlogFilters): Promise<BlogApiResponse> => {
//     const params = new URLSearchParams();
    
//     if (filters?.page) params.append('page', filters.page.toString());
//     if (filters?.limit) params.append('limit', filters.limit.toString());
//     if (filters?.category) params.append('category', filters.category);
//     if (filters?.search) params.append('search', filters.search);
//     if (filters?.tags?.length) params.append('tags', filters.tags.join(','));
    
//     const queryString = params.toString();
//     const endpoint = `/api/v1/blog/posts${queryString ? `?${queryString}` : ''}`;
    
//     return apiClient.get(endpoint);
//   },
  
//   // Получить пост по slug
//   getPostBySlug: (slug: string): Promise<BlogPost> => 
//     apiClient.get(`/api/v1/blog/posts/${slug}`),
  
//   // Получить featured посты (для главной)
//   getFeaturedPosts: (limit?: number): Promise<BlogPost[]> => {
//     const params = new URLSearchParams();
//     if (limit) params.append('limit', limit.toString());
    
//     const queryString = params.toString();
//     return apiClient.get(`/api/v1/blog/featured${queryString ? `?${queryString}` : ''}`);
//   },
  
//   // Получить посты по категории
//   getPostsByCategory: (category: string, filters?: Omit<BlogFilters, 'category'>): Promise<BlogApiResponse> => {
//     const params = new URLSearchParams();
    
//     if (filters?.page) params.append('page', filters.page.toString());
//     if (filters?.limit) params.append('limit', filters.limit.toString());
//     if (filters?.search) params.append('search', filters.search);
    
//     const queryString = params.toString();
//     return apiClient.get(
//       `/api/v1/blog/categories/${category}/posts${queryString ? `?${queryString}` : ''}`
//     );
//   },
  
//   // Получить все категории
//   getCategories: (): Promise<string[]> => 
//     apiClient.get('/api/v1/blog/categories'),
// };

import { BlogPost, BlogApiResponse, BlogFilters } from '../model/types';

// Временная заглушка API для работы без бэкенда
class BlogApiMock {
  private mockPosts: BlogPost[];

  constructor() {
    this.mockPosts = this.generateMockPosts();
  }

  private generateMockPosts(): BlogPost[] {
    return [
      {
        id: 1,
        slug: "pochemu-startapy-oshibayutsya-v-dizayne",
        title: "Почему большинство стартапов продолжают ошибаться в дизайне",
        description: "Многие команды быстро развивают продукт, но отстают в дизайне. В этой статье мы разберем, почему это происходит, как это сдерживает вас и что делать, чтобы оставаться ясным и конкурентоспособным.",
        readTime: "5 мин чтения",
        author: "Анна Иванова",
        category: "Стратегия",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isFeatured: true,
        publishedAt: "2024-01-15",
        content: "Полный текст статьи...",
        excerpt: "Краткое описание...",
        tags: ["дизайн", "стартапы", "развитие"],
        metaTitle: "Ошибки в дизайне стартапов",
        metaDescription: "Разбираем основные ошибки дизайна в стартапах и способы их решения",
      },
      {
        id: 2,
        slug: "realnaya-stoimost-plohogo-dizayna",
        title: "Реальная стоимость плохого дизайна (Не то, что вы думаете)",
        description: "Плохой дизайн замедляет принятие решений, загромождает ваше сообщение и тормозит рост.",
        readTime: "4 мин чтения",
        author: "Максим Петров",
        category: "Дизайн",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        publishedAt: "2024-01-10",
        content: "Полный текст статьи...",
        excerpt: "Краткое описание...",
        tags: ["дизайн", "стоимость", "продукт"],
      },
      {
        id: 3,
        slug: "kak-uspevat-bolshe-bez-nayma-dizayn-komandy",
        title: "Как успевать больше без найма полноценной дизайн-команды",
        description: "Небольшие команды используют подписки на дизайн, чтобы оставаться быстрыми без найма.",
        readTime: "3 мин чтения",
        author: "Ольга Сидорова",
        category: "Рост",
        imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        publishedAt: "2024-01-05",
        content: "Полный текст статьи...",
        excerpt: "Краткое описание...",
        tags: ["команда", "аутсорсинг", "рост"],
      },
      {
        id: 4,
        slug: "kak-rabotat-s-dizayn-podpiskoy",
        title: "Как на самом деле выглядит работа с дизайн-подпиской",
        description: "Взгляд изнутри на то, как основатели используют дизайн-подписки для более быстрого движения.",
        readTime: "6 мин чтения",
        author: "Дмитрий Кузнецов",
        category: "Кейс",
        imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        publishedAt: "2024-01-01",
        content: "Полный текст статьи...",
        excerpt: "Краткое описание...",
        tags: ["кейс", "подписка", "практика"],
      },
    ];
  }

  // Имитация задержки запроса
  private async simulateDelay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getPosts(filters?: BlogFilters): Promise<BlogApiResponse> {
    await this.simulateDelay();
    
    let filteredPosts = [...this.mockPosts];
    
    // Применяем фильтры
    if (filters?.category) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === filters.category?.toLowerCase()
      );
    }
    
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower)
      );
    }
    
    // Пагинация
    const page = filters?.page || 1;
    const limit = filters?.limit || 9;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    return {
      posts: paginatedPosts,
      total: filteredPosts.length,
      page,
      limit,
      totalPages: Math.ceil(filteredPosts.length / limit),
    };
  }

  async getPostBySlug(slug: string): Promise<BlogPost> {
    await this.simulateDelay();
    
    const post = this.mockPosts.find(p => p.slug === slug);
    if (!post) {
      throw new Error('NOT_FOUND');
    }
    
    return post;
  }

  async getFeaturedPosts(limit?: number): Promise<BlogPost[]> {
    await this.simulateDelay();
    
    const featured = this.mockPosts.filter(post => post.isFeatured);
    const result = featured.length > 0 
      ? featured 
      : this.mockPosts.slice(0, limit || 3);
    
    return result.slice(0, limit || 3);
  }

  async getPostsByCategory(
    category: string, 
    filters?: Omit<BlogFilters, 'category'>
  ): Promise<BlogApiResponse> {
    return this.getPosts({ ...filters, category });
  }

  async getCategories(): Promise<string[]> {
    await this.simulateDelay();
    
    // Исправленная строка: используем Array.from вместо spread operator
    const categories = this.mockPosts.map(post => post.category);
    const uniqueCategories = Array.from(new Set(categories));
    return uniqueCategories;
  }
}

// Экспортируем mock API
export const blogApi = new BlogApiMock();

// Когда появится бэкенд, замените на реальный API:
/*
import { apiClient } from '@/shared/api/client';
import { BlogPost, BlogApiResponse, BlogFilters } from '../model/types';

export const blogApi = {
  getPosts: (filters?: BlogFilters): Promise<BlogApiResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());
    if (filters?.category) params.append('category', filters.category);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.tags?.length) params.append('tags', filters.tags.join(','));
    
    const queryString = params.toString();
    const endpoint = `/api/v1/blog/posts${queryString ? `?${queryString}` : ''}`;
    
    return apiClient.get(endpoint);
  },
  
  getPostBySlug: (slug: string): Promise<BlogPost> => 
    apiClient.get(`/api/v1/blog/posts/${slug}`),
  
  getFeaturedPosts: (limit?: number): Promise<BlogPost[]> => {
    const params = new URLSearchParams();
    if (limit) params.append('limit', limit.toString());
    
    const queryString = params.toString();
    return apiClient.get(`/api/v1/blog/featured${queryString ? `?${queryString}` : ''}`);
  },
  
  getPostsByCategory: (category: string, filters?: Omit<BlogFilters, 'category'>): Promise<BlogApiResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());
    if (filters?.search) params.append('search', filters.search);
    
    const queryString = params.toString();
    return apiClient.get(
      `/api/v1/blog/categories/${category}/posts${queryString ? `?${queryString}` : ''}`
    );
  },
  
  getCategories: (): Promise<string[]> => 
    apiClient.get('/api/v1/blog/categories'),
};
*/