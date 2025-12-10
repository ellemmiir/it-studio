"use client";

import { useState } from "react";
import Link from "next/link";
import {
  useProjectsPreview,
  useProjectCategories,
} from "@/features/projects/model/hooks";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilters } from "../components/ProjectFilters";

export const ProjectsPreview = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { data: projects, loading } = useProjectsPreview(activeFilter);
  const { data: categories } = useProjectCategories();

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="mb-4 text-5xl font-bold text-gray-900">
              Наши проекты
            </h2>
            <p className="max-w-xl text-gray-600">
              Каждый проект, который мы реализуем, отражает нашу приверженность
              качеству и создан для того, чтобы вдохновлять и способствовать
              успеху.
            </p>
          </div>

          <Link
            href="/projects"
            className="flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-800"
          >
            Все проекты
            <span className="text-xl">→</span>
          </Link>
        </div>

        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          categories={categories}
        />

        {loading ? (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: activeFilter === "all" ? 6 : 3 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="h-80 animate-pulse rounded-lg bg-gray-100"
                />
              ),
            )}
          </div>
        ) : (
          <>
            {projects.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            ) : (
              <div className="mt-12 py-12 text-center">
                <p className="text-gray-500">
                  В этой категории пока нет проектов
                </p>
              </div>
            )}

            {projects.length > 0 && (
              <div className="mt-12 text-center">
                <Link
                  href="/projects"
                  className="inline-block rounded-lg bg-purple-600 px-8 py-3 text-white transition-colors hover:bg-purple-700"
                >
                  Смотреть все проекты
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsPreview;
