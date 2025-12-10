"use client";

import { useState } from "react";
import {
  useProjects,
  useProjectCategories,
} from "@/features/projects/model/hooks";
import { ProjectCard } from "@/features/projects/ui/components/ProjectCard";
import { ProjectFilters } from "@/features/projects/ui/components/ProjectFilters";

const PROJECTS_PER_PAGE = 12;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [offset, setOffset] = useState<number>(0);

  const {
    data: projects,
    total,
    loading,
    error,
  } = useProjects({
    category: activeFilter,
    limit: PROJECTS_PER_PAGE,
    offset,
  });

  const { data: categories } = useProjectCategories();

  const totalPages = Math.ceil(total / PROJECTS_PER_PAGE);
  const currentPage = Math.floor(offset / PROJECTS_PER_PAGE) + 1;

  const handleLoadMore = () => {
    setOffset((prev) => prev + PROJECTS_PER_PAGE);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setOffset(0); // Сбрасываем пагинацию при смене фильтра
  };

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">Ошибка загрузки проектов: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Наши проекты
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Каждый проект отражает нашу приверженность качеству и создан для
            того, чтобы вдохновлять и способствовать успеху.
          </p>
        </div>

        <div className="mb-12">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            categories={categories}
          />
        </div>

        {loading && offset === 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-lg bg-gray-100"
              />
            ))}
          </div>
        ) : (
          <>
            {projects.length > 0 ? (
              <>
                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                  ))}
                </div>

                {total > projects.length && (
                  <div className="text-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={loading}
                      className="rounded-lg bg-purple-600 px-8 py-3 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading
                        ? "Загрузка..."
                        : `Показать еще ${PROJECTS_PER_PAGE} из ${total - projects.length}`}
                    </button>
                    <p className="mt-4 text-gray-500">
                      Страница {currentPage} из {totalPages}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl text-gray-500">
                  В этой категории пока нет проектов
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
