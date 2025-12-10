"use client";

import { useState } from "react";
import { useProjects } from "@/features/projects/model/hooks";
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
    serviceSlug: activeFilter,
    limit: PROJECTS_PER_PAGE,
    offset,
  });

  const totalPages = Math.ceil(total / PROJECTS_PER_PAGE);
  const currentPage = Math.floor(offset / PROJECTS_PER_PAGE) + 1;
  const hasMore = total > offset + projects.length;

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
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <div className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Наши проекты
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
            Каждый проект — это уникальная история успеха, созданная с любовью к
            деталям и стремлением к совершенству. Мы гордимся тем, что делаем.
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-16">
        {/* Фильтры */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Фильтровать по услугам
          </h2>
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Статистика */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-gray-600">
              Найдено проектов: <span className="font-bold">{total}</span>
            </p>
            {activeFilter !== "all" && (
              <p className="mt-1 text-sm text-gray-500">
                Показаны проекты по услуге: {projects.length} из {total}
              </p>
            )}
          </div>
          {total > 0 && (
            <p className="text-gray-600">
              Страница {currentPage} из {totalPages}
            </p>
          )}
        </div>

        {/* Сетка проектов */}
        {loading && offset === 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>

            {/* Кнопка "Показать еще" */}
            {hasMore && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="rounded-lg bg-purple-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading
                    ? "Загрузка..."
                    : `Показать еще ${Math.min(PROJECTS_PER_PAGE, total - projects.length - offset)} проектов`}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <div className="mb-6 text-6xl">📁</div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Проекты не найдены
            </h3>
            <p className="mx-auto max-w-md text-gray-600">
              {activeFilter === "all"
                ? "В данный момент нет доступных проектов. Загляните позже!"
                : `В категории "${activeFilter}" пока нет проектов. Попробуйте выбрать другую услугу.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
