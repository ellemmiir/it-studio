// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Project, ProjectDetail } from "@/features/projects/model/types";

// export const projects: ProjectDetail[] = [
//   {
//     id: "1",
//     title: "Radiant Skincare Branding",
//     description: "A user-centric, ad-free platform for skincare enthusiasts.",
//     fullDescription:
//       "Complete branding and digital platform development for Radiant Skincare, focusing on creating an ad-free, user-centric experience that empowers customers in their skincare journey.",
//     category: "ip-telephony",
//     tags: ["MAKING", "DEVELOPMENT", "VERSECURY"],
//     image: "/images/content/test.jpg",
//     slug: "radiant-skincare",
//     client: "Radiant Skincare",
//     duration: "3 months",
//     technologies: ["React", "Node.js", "MongoDB", "AWS"],
//     challenges: [
//       "Creating a unique identity in saturated market",
//       "Building trust with health-conscious consumers",
//       "Developing ad-free revenue model",
//     ],
//     solutions: [
//       "Minimalist, clean design reflecting purity",
//       "Educational content integration",
//       "Subscription-based business model",
//     ],
//     results: [
//       "40% increase in customer engagement",
//       "25% growth in subscription revenue",
//       "95% positive user feedback",
//     ],
//   },
//   {
//     id: "2",
//     title: "Apex Clothing Co. Rebrand",
//     description: "Bold new look for an eco-conscious apparel brand.",
//     fullDescription:
//       "Comprehensive rebranding strategy for Apex Clothing Co., transforming their identity to better reflect their commitment to sustainability and eco-conscious manufacturing.",
//     category: "it-infrastructure",
//     tags: ["MAKING", "SUPPORT", "VERSECURY"],
//     image: "/images/content/test.jpg",
//     slug: "apex-clothing",
//     client: "Apex Clothing Co.",
//     duration: "4 months",
//     technologies: ["Adobe Creative Suite", "Shopify", "WebGL"],
//     challenges: [
//       "Communicating sustainability authentically",
//       "Appealing to younger demographic",
//       "Maintaining premium brand positioning",
//     ],
//     solutions: [
//       "Earth-tone color palette with bold accents",
//       "Interactive sustainability timeline",
//       "Augmented reality try-on features",
//     ],
//     results: [
//       "60% increase in social media engagement",
//       "35% growth in online sales",
//       "Award for sustainable design",
//     ],
//   },
//   {
//     id: "3",
//     title: "Vero App Development",
//     description:
//       "Vero aimed to distinguish itself in a competitive social media landscape.",
//     fullDescription:
//       "Development of a modern social media application Vero with focus on privacy and user experience. The platform was built from ground up with cutting-edge technologies to compete with established players.",
//     category: "software-development",
//     tags: ["MAKING", "DEVELOPMENT", "VERSECURY"],
//     image: "/images/content/test.jpg",
//     slug: "vero-app",
//     client: "Vero Social Media",
//     duration: "6 months",
//     technologies: ["React Native", "GraphQL", "PostgreSQL", "Redis", "Docker"],
//     challenges: [
//       "Differentiating in crowded social media market",
//       "Ensuring user privacy and data security",
//       "Achieving high performance at scale",
//     ],
//     solutions: [
//       "Privacy-first architecture design",
//       "Advanced content recommendation algorithms",
//       "Microservices-based scalable infrastructure",
//     ],
//     results: [
//       "500k+ downloads in first month",
//       "4.8-star rating on app stores",
//       "30% lower infrastructure costs than competitors",
//     ],
//   },
//   {
//     id: "4",
//     title: "Stoyo Branding",
//     description: "Visual identity and packaging design for Stoyo brand.",
//     fullDescription:
//       "Complete brand identity development for Stoyo, a premium yogurt company. The project encompassed logo design, packaging, marketing materials, and digital presence to establish Stoyo as a leader in the health food sector.",
//     category: "ai-integration",
//     tags: ["MAKING", "SUPPORT"],
//     image: "/images/content/test.jpg",
//     slug: "stoyo",
//     client: "Stoyo Foods",
//     duration: "2 months",
//     technologies: ["Adobe Creative Suite", "Blender", "Figma", "Three.js"],
//     challenges: [
//       "Communicating premium quality through design",
//       "Standing out in competitive food market",
//       "Creating versatile design system",
//     ],
//     solutions: [
//       "Minimalist design emphasizing natural ingredients",
//       "Custom typography and color palette",
//       "3D packaging visualization",
//     ],
//     results: [
//       "45% increase in shelf visibility",
//       "Won 3 design awards",
//       "Client sales increased by 60% post-rebrand",
//     ],
//   },
//   {
//     id: "5",
//     title: "Timeless Impressions Redesign",
//     description: "Complete redesign of legacy system with modern technologies.",
//     fullDescription:
//       "Modernization of Timeless Impressions' legacy e-commerce platform. The project involved migrating from outdated technologies to a modern stack while maintaining business continuity and improving user experience.",
//     category: "software-development",
//     tags: ["MAKING", "DEVELOPMENT", "VERSECURY"],
//     image: "/images/content/test.jpg",
//     slug: "timeless-impressions",
//     client: "Timeless Impressions",
//     duration: "5 months",
//     technologies: ["Next.js", "TypeScript", "NestJS", "MongoDB", "AWS"],
//     challenges: [
//       "Migrating data without downtime",
//       "Training team on new technologies",
//       "Maintaining SEO rankings during transition",
//     ],
//     solutions: [
//       "Phased migration strategy",
//       "Comprehensive documentation and training",
//       "301 redirects and SEO preservation",
//     ],
//     results: [
//       "300% faster page load times",
//       "40% increase in conversion rate",
//       "Zero downtime during migration",
//     ],
//   },
// ];

// const ProjectsPreview = () => {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const categories = [
//     "all",
//     "it-infrastructure",
//     "ip-telephony",
//     "audit",
//     "software-development",
//     "video-surveillance",
//     "devops",
//     "it-security-audit",
//     "ai-integration",
//   ];

//   const categoryLabels: { [key: string]: string } = {
//     all: "Все",
//     "it-infrastructure": "IT-инфраструктура",
//     "ip-telephony": "IP-телефония",
//     audit: "Аудит",
//     "software-development": "Разработка ПО",
//     "video-surveillance": "Видеонаблюдение",
//     devops: "DevOps",
//     "it-security-audit": "Аудит ИТ и ИБ",
//     "ai-integration": "Интеграция ИИ",
//   };

//   // Используем базовый тип Project для карточек
//   const portfolioProjects: Project[] = projects;

//   const filteredProjects =
//     activeFilter === "all"
//       ? portfolioProjects
//       : portfolioProjects.filter(
//           (project) => project.category === activeFilter,
//         );

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         {/* Заголовок */}
//         <div className="mb-20 flex justify-between text-left">
//           <h1 className="mb-10 text-5xl font-bold text-gray-900">
//             Наши проекты
//           </h1>
//           <p className="max-w-2xl text-lg text-gray-600">
//             Каждый проект, который мы реализуем, отражает нашу приверженность
//             качеству и создан для того, чтобы вдохновлять и способствовать
//             успеху.
//           </p>
//         </div>

//         {/* Фильтры */}
//         <div className="mb-13 flex flex-wrap justify-normal gap-4 border-b border-gray-200 pb-7">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveFilter(category)}
//               className={`cursor-pointer rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ${
//                 activeFilter === category
//                   ? "bg-black text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {categoryLabels[category]}
//             </button>
//           ))}
//         </div>

//         {/* Сетка проектов */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {filteredProjects.map((project) => (
//             <Link
//               key={project.id}
//               href={`/projects/${project.slug}`}
//               className="group flex flex-col overflow-hidden bg-white transition-all duration-300"
//             >
//               {/* Изображение проекта */}
//               <div className="relative h-86 overflow-hidden bg-gray-200">
//                 <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                 {project.image ? (
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 ) : (
//                   <div className="flex h-full w-full items-center justify-center bg-gray-300">
//                     <span className="text-gray-500">Project Image</span>
//                   </div>
//                 )}
//               </div>

//               {/* Контент карточки */}
//               <div className="flex flex-1 flex-col py-6">
//                 <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-800">
//                   {project.title}
//                 </h3>
//                 <p className="mb-4 line-clamp-2 text-gray-600">
//                   {project.description}
//                 </p>
//                 {/* Теги - всегда внизу */}
//                 <div className="mt-auto flex flex-wrap gap-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="rounded-full rounded-md border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Сообщение если нет проектов */}
//         {filteredProjects.length === 0 && (
//           <div className="py-12 text-center">
//             <p className="text-lg text-gray-500">
//               No projects found for this category.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProjectsPreview;

// frontend/src/features/portfolio/ui/ProjectsPreview/ProjectsPreview.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectPreview } from "../../model/types";

interface Props {
  projects: ProjectPreview[];
}

export const ProjectsPreview = ({ projects }: Props) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    "all",
    "it-infrastructure",
    "ip-telephony",
    "audit",
    "software-development",
    "video-surveillance",
    "devops",
    "it-security-audit",
    "ai-integration",
  ];

  const categoryLabels: { [key: string]: string } = {
    all: "Все",
    "it-infrastructure": "IT-инфраструктура",
    "ip-telephony": "IP-телефония",
    audit: "Аудит",
    "software-development": "Разработка ПО",
    "video-surveillance": "Видеонаблюдение",
    devops: "DevOps",
    "it-security-audit": "Аудит ИТ и ИБ",
    "ai-integration": "Интеграция ИИ",
  };

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

        {/* Фильтры */}
        <div className="border-grey-300 mb-13 flex flex-wrap justify-normal gap-4 border-b pb-7">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`cursor-pointer rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-black text-white shadow-lg"
                  : "hover:bg-grey-300 bg-grey-200 text-grey-900"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden bg-white transition-all duration-300"
            >
              {/* Карточка проекта */}
              <div className="bg-grey-300 relative h-86 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
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

              {/* Контент карточки */}
              <div className="flex flex-1 flex-col py-6">
                <h4 className="group-hover:text-accent-700 text-title mb-2 text-xl font-bold transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-grey-800 mb-5 line-clamp-2">
                  {project.description}
                </p>
                {/* Теги */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border-grey-300 text-grey-800 rounded-md border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="min-h-[518px] py-20 text-center">
            <p className="text-grey-800 text-xl">
              В этой категории пока нет проектов
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
