// components/BlogSection.tsx
"use client";

import React from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
  isFeatured?: boolean;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Почему большинство стартапов продолжают ошибаться в дизайне",
      description:
        "Многие команды быстро развивают продукт, но отстают в дизайне. В этой статье мы разберем, почему это происходит, как это сдерживает вас и что делать, чтобы оставаться ясным и конкурентоспособным.",
      readTime: "5 мин чтения",
      author: "Анна Иванова",
      category: "Стратегия",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Реальная стоимость плохого дизайна (Не то, что вы думаете)",
      description:
        "Плохой дизайн замедляет принятие решений, загромождает ваше сообщение и тормозит рост.",
      readTime: "4 мин чтения",
      author: "Максим Петров",
      category: "Дизайн",
      imageUrl:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Как успевать больше без найма полноценной дизайн-команды",
      description:
        "Небольшие команды используют подписки на дизайн, чтобы оставаться быстрыми без найма.",
      readTime: "3 мин чтения",
      author: "Ольга Сидорова",
      category: "Рост",
      imageUrl:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Как на самом деле выглядит работа с дизайн-подпиской",
      description:
        "Взгляд изнутри на то, как основатели используют дизайн-подписки для более быстрого движения.",
      readTime: "6 мин чтения",
      author: "Дмитрий Кузнецов",
      category: "Кейс",
      imageUrl:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const featuredPost = blogPosts.find((post) => post.isFeatured);
  const regularPosts = blogPosts.filter((post) => !post.isFeatured);

  return (
    <section className="bg-grey-200 px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Заголовок секции */}
        <div className="mb-12">
          <h2 className="text-title mb-10 text-5xl font-bold">Наш блог</h2>
        </div>

        {/* Главныйпост*/}
        {featuredPost && (
          <div className="mb-16">
            <article className="group flex flex-col overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl lg:flex-row">
              {/* Изображение слева */}
              <div className="relative h-64 overflow-hidden lg:h-auto lg:w-2/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featuredPost.imageUrl})` }}
                />
                {/* Градиент справа для плавного перехода к контенту */}
                <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-white/0 lg:via-white/20 lg:to-white" />

                {/* Категория в правом верхнем углу */}
                <div className="absolute top-6 right-6">
                  <span className="inline-block rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Контент справа */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:w-3/5 lg:p-12">
                <div>
                  <h3 className="mb-6 text-2xl leading-tight font-bold text-gray-900 md:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h3>

                  <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                    {featuredPost.description}
                  </p>

                  <div className="flex flex-col justify-between border-t border-gray-100 pt-6 md:flex-row md:items-center">
                    <div className="mb-4 flex items-center space-x-4 md:mb-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-500">
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm font-medium text-gray-700">
                        автор: {featuredPost.author}
                      </span>
                    </div>
                    <button className="inline-flex w-fit items-center rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-all hover:bg-black">
                      Читать статью
                      <svg
                        className="ml-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Сетка из трех постов в ряд */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Изображение вверху */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.imageUrl})` }}
                />
                {/* Градиент от прозрачного к белому сверху вниз */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

                {/* Категория в правом верхнем углу */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Контент на белом фоне */}
              <div className="p-6">
                <h4 className="mb-4 line-clamp-2 text-xl leading-snug font-bold text-gray-900">
                  {post.title}
                </h4>

                <p className="mb-6 line-clamp-2 text-sm text-gray-600">
                  {post.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex flex-col space-y-1 text-sm text-gray-500">
                    {/* Время прочтения и автор друг под другом */}
                    <span>{post.readTime}</span>
                    <span className="font-medium">автор: {post.author}</span>
                  </div>
                  <button className="flex items-center text-sm font-semibold text-gray-900 transition-colors hover:text-black">
                    Читать
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Кнопка "View all" */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-900 px-8 py-3.5 font-bold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            Все статьи
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
