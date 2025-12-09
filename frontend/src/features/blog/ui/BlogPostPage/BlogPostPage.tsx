"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "../../model/types";

interface Props {
  post: BlogPost;
}

const BlogPostPage: React.FC<Props> = ({ post }) => {
  return (
    <article className="mx-auto max-w-380 px-4">
      {/* Hero секция */}

      {/* <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          />
        </div> */}

      <div className="pt-40 pb-20">
        <h1 className="text-title mb-10 text-7xl font-semibold">
          {post.title}
        </h1>
        <div className="max-w-4xl">
          <p className="text-grey-800 mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quos reprehenderit quibusdam. Cupiditate id culpa distinctio
            aliquam. Quia placeat deleniti ad voluptates incidunt dignissimos
            eos nesciunt, accusamus odio? Omnis, iure!
          </p>
        </div>
        <div>
          <div className="flex items-baseline text-gray-300">
            <span className="mb-6 inline-block rounded-full bg-black px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
            <span className="mx-3">•</span>
            <span>{post.author}</span>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
            <span className="mx-3">•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("ru-RU")}
            </span>
          </div>
        </div>
      </div>

      {/* <div className="relative mx-auto max-w-4xl px-4 py-24">
          <div className="text-center">
            <span className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-gray-300">
              <span>{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
              <span className="mx-3">•</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("ru-RU")}
              </span>
            </div>
          </div>
        </div> */}
      {/* Контент */}
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-xl text-gray-600">{post.description}</p>

          {/* Здесь будет основное содержание статьи */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 italic">
              Здесь будет полный текст статьи, когда появится бэкенд
            </p>
          </div>

          {/* Тэги */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Навигация */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Вернуться к статьям
            </Link>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              Наверх
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
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </article>
  );
};

export default BlogPostPage;
