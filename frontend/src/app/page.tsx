import HeroSection from "@/components/sections/HeroSection/HeroSection";
import FaqSection from "@/components/sections/FaqSection/FaqSection";
import ServicesPreview from "@/features/services/ui/ServicesPreview/ServicesPreview";
import ApproachSection from "@/components/sections/ApproachSection/ApproachSection";
import StatsSection from "@/components/sections/StatsSection/StatsSection";
import AnimatedButton from "@/components/ui/Button/Button";
import { ProjectsPreview } from "@/features/projects/ui/ProjectsPreview/ProjectsPreview";
import { getProjectsPreview } from "@/features/projects/model/api";
import CtaSection from "@/components/sections/CtaSection/CtaSection";
import BlogPreview from "@/features/blog/ui/BlogPreview/BlogPreview";
import AboutSection from "@/components/sections/AboutSection/AboutSection";

export default async function Home() {
  const projects = await getProjectsPreview();

  return (
    <div className="relative">
      <HeroSection />
      {/* <StatsSection /> */}
      {/* <ApproachSection /> */}
      <AboutSection />
      <ServicesPreview />
      <ProjectsPreview projects={projects} />
      <BlogPreview />
      <FaqSection />
      <CtaSection />
      {/* <AnimatedButton /> */}
    </div>
  );
}
