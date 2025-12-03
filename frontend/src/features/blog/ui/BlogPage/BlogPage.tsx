"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost, BlogFilters } from "../../model/types";
import { blogApi } from "../../api/index";

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<BlogFilters>({
    page: 1,
    limit: 9,
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [postsData, categoriesData] = await Promise.all([
        blogApi.getPosts(filters),
        blogApi.getCategories(),
      ]);

      setPosts(postsData.posts);
      setCategories(categoriesData);
    } catch (err) {
      console.error("Error fetching blog data:", err);
      setError("Не удалось загрузить статьи");
      // Fallback на mock данные
      setPosts(getMockPosts());
      setCategories(["Стратегия", "Дизайн", "Рост", "Кейс"]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === category ? undefined : category,
      page: 1,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold">Блог</h1>
            <p className="text-gray-600">Загрузка статей...</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-lg bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Наш блог</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Полезные статьи о дизайне, продукте, росте и стратегии для вашего
            бизнеса
          </p>
        </div>

        {/* Категории */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleCategoryClick("")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !filters.category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Все статьи
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filters.category === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка статей */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Изображение */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 flex-grow text-gray-600">
                    {post.description}
                  </p>

                  <div className="mt-auto border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">
                          {post.readTime}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-black">
                        Читать →
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Пагинация */}
        {posts.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  page: (prev.page || 1) - 1,
                }))
              }
              disabled={filters.page === 1}
              className="mx-1 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Назад
            </button>

            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  page: (prev.page || 1) + 1,
                }))
              }
              disabled={posts.length < (filters.limit || 9)}
              className="mx-1 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Вперед
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Mock данные для демонстрации
const getMockPosts = () => [
  // ... те же mock данные что и выше, можно расширить
];

export default BlogPage;
