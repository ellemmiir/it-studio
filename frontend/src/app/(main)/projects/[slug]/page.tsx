import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsService } from "@/features/projects/model/projects.service";
import { ProjectDetailed } from "@/features/projects/ui/ProjectsDetailed/ProjectsDetailed";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await projectsService.getBySlug(params.slug);

  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  return {
    title: `${project.title} | Наши проекты`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  // Генерируем статические пути для первых 50 проектов
  const { data: projects } = await projectsService.getAll({ limit: 50 });
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const project = await projectsService.getBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailed project={project} />;
}
