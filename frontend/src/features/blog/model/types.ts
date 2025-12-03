export interface BlogPost {
  id: number;
  slug: string; // Добавляем slug для URL
  title: string;
  description: string;
  content?: string; // Для полной статьи
  excerpt?: string; // Для превью
  readTime: string;
  author: string;
  authorAvatar?: string;
  category: string;
  imageUrl: string;
  thumbnailUrl?: string;
  publishedAt: string;
  updatedAt?: string;
  isFeatured?: boolean;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogApiResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BlogFilters {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  tags?: string[];
}