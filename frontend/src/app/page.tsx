import HeroSection from "@/components/sections/HeroSection/HeroSection";
import StepsSection from "@/components/sections/StepsSection/StepsSection";
import ServicesPreview from "@/features/services/ui/ServicesPreview/ServicesPreview";
import FaqSection from "@/components/sections/FaqSection/FaqSection";
import { ProjectsPreview } from "@/features/projects/ui/ProjectsPreview/ProjectsPreview";
import { getProjectsPreview } from "@/features/projects/model/api";
import CtaSection from "@/components/sections/CtaSection/CtaSection";
import BlogPreview from "@/features/blog/ui/BlogPreview/BlogPreview";

export default async function Home() {
  const projects = await getProjectsPreview();

  return (
    <div className="relative">
      <HeroSection />
      <StepsSection />
      <ServicesPreview />
      {/* <ProjectsPreview projects={projects} /> */}
      {/* <BlogPreview /> */}
      {/* <FaqSection /> */}
      {/* <CtaSection /> */}
    </div>
  );
}
