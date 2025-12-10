"use client";

import { useState } from "react";
import Link from "next/link";
import { useProjectsPreview } from "@/features/projects/model/hooks";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilters } from "../components/ProjectFilters";

export const ProjectsPreview = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { data: projects, loading } = useProjectsPreview(activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Заголовок и описание */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Наша работа
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Реализованные проекты
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Мы создаем решения, которые работают на результат. Каждый проект —
            это уникальный кейс, где технологии встречаются с бизнес-целями.
          </p>
        </div>

        {/* Фильтры */}
        <div className="mb-12">
          <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Исследуйте по услугам
              </h3>
              <p className="text-gray-600">
                Выберите услугу, чтобы увидеть соответствующие проекты
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-lg border border-purple-200 px-6 py-3 font-semibold text-purple-600 transition-all hover:bg-purple-50 hover:text-purple-800"
            >
              Все проекты
              <span className="text-xl">→</span>
            </Link>
          </div>

          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Сетка проектов */}
        {loading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: activeFilter === "all" ? 6 : 3 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="h-80 animate-pulse rounded-xl bg-gray-100"
                />
              ),
            )}
          </div>
        ) : projects.length > 0 ? (
          <>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>

            {/* Кнопка смотреть все */}
            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-lg bg-purple-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-purple-700"
              >
                <span>Смотреть все проекты</span>
                <span className="text-xl">→</span>
              </Link>
              <p className="mt-4 text-gray-500">
                {activeFilter === "all"
                  ? `Показано ${projects.length} из 50+ проектов`
                  : `Показано ${projects.length} проектов по выбранной услуге`}
              </p>
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              В этой категории пока нет проектов
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPreview;
