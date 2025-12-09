"use client";

import { useState } from "react";
import { ProjectPreview } from "../../model/types";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilters } from "../components/ProjectFilters";
import { ProjectsGrid } from "../components/ProjectGrid";

interface Props {
  projects: ProjectPreview[];
}

export const ProjectsPreview = ({ projects }: Props) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        <div className="mb-20 flex justify-between text-left">
          <h2 className="text-title text-5xl font-bold">Наши проекты</h2>
          <p className="text-grey-800 max-w-2xl text-lg">
            Каждый проект, который мы реализуем, отражает нашу приверженность
            качеству и создан для того, чтобы вдохновлять и способствовать
            успеху.
          </p>
        </div>

        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectsGrid projects={filteredProjects} />

        {filteredProjects.length === 0 && <EmptyProjectsState />}
      </div>
    </section>
  );
};

function EmptyProjectsState() {
  return (
    <div className="min-h-[518px] py-20 text-center">
      <p className="text-grey-800 text-xl">
        В этой категории пока нет проектов
      </p>
    </div>
  );
}
