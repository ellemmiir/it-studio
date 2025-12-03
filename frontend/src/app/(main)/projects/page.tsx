// export default function Home() {
//   return <main>Тут отдельная страница проектов</main>;
// }

// frontend/src/app/(main)/portfolio/page.tsx
import { ProjectsPreview } from "@/features/projects/ui/ProjectsPreview/ProjectsPreview";
import { getProjectsPreview } from "@/features/projects/model/api";

export default async function PortfolioPage() {
  const projects = await getProjectsPreview();

  return (
    <div className="min-h-screen bg-white">
      <ProjectsPreview projects={projects} />
    </div>
  );
}
