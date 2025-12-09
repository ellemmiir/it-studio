import Link from "next/link";
import Image from "next/image";
import { ProjectPreview } from "../../model/types";

interface ProjectCardProps {
  project: ProjectPreview;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden bg-white transition-all duration-300"
    >
      <ProjectImage image={project.image} title={project.title} />

      <div className="flex flex-1 flex-col py-6">
        <h4 className="group-hover:text-accent-700 text-title mb-2 text-xl font-bold transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-grey-800 mb-5 line-clamp-2">{project.description}</p>

        <ProjectTags tags={project.tags} />
      </div>
    </Link>
  );
};

function ProjectImage({ image, title }: { image?: string; title: string }) {
  return (
    <div className="bg-grey-300 relative h-86 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="bg-grey-300 flex h-full w-full items-center justify-center">
          <span className="text-grey-800">Project Image</span>
        </div>
      )}
    </div>
  );
}


function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-auto flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="border-grey-300 text-grey-800 rounded-md border px-3 py-1 text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
