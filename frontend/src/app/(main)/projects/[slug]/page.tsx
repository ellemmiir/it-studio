// // app/projects/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import Link from "next/link";

// interface ProjectDetail {
//   id: string;
//   title: string;
//   description: string;
//   fullDescription: string;
//   category: string;
//   tags: string[];
//   image: string;
//   slug: string;
//   client: string;
//   duration: string;
//   technologies: string[];
//   challenges: string[];
//   solutions: string[];
//   results: string[];
// }

// // Это временные данные
// const projectData: { [key: string]: ProjectDetail } = {
//   "radiant-skincare": {
//     id: "1",
//     title: "Radiant Skincare Branding",
//     description: "A user-centric, ad-free platform for skincare enthusiasts.",
//     fullDescription:
//       "Complete branding and digital platform development for Radiant Skincare, focusing on creating an ad-free, user-centric experience that empowers customers in their skincare journey.",
//     category: "branding",
//     tags: ["MAKING", "DEVELOPMENT", "VERSECURY"],
//     image: "/projects/radiant-skincare.jpg",
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
//   "apex-clothing": {
//     id: "2",
//     title: "Apex Clothing Co. Rebrand",
//     description: "Bold new look for an eco-conscious apparel brand.",
//     fullDescription:
//       "Comprehensive rebranding strategy for Apex Clothing Co., transforming their identity to better reflect their commitment to sustainability and eco-conscious manufacturing.",
//     category: "branding",
//     tags: ["MAKING", "SUPPORT", "VERSECURY"],
//     image: "/projects/apex-clothing.jpg",
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
// };

// interface ProjectPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   const project = projectData[params.slug];

//   if (!project) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white py-12">
//       <div className="container mx-auto px-4">
//         {/* Хлебные крошки */}
//         <nav className="mb-8">
//           <Link href="/" className="text-purple-600 hover:text-purple-800">
//             Home
//           </Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <Link
//             href="/portfolio"
//             className="text-purple-600 hover:text-purple-800"
//           >
//             Projects
//           </Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-gray-600">{project.title}</span>
//         </nav>

//         {/* Заголовок проекта */}
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-gray-900">
//             {project.title}
//           </h1>
//           <p className="mx-auto max-w-3xl text-xl text-gray-600">
//             {project.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//           {/* Основной контент */}
//           <div className="lg:col-span-2">
//             {/* Изображение проекта */}
//             <div className="mb-8 flex h-96 items-center justify-center rounded-lg bg-gray-200">
//               <span className="text-gray-500">
//                 Project Image: {project.title}
//               </span>
//             </div>

//             {/* Полное описание */}
//             <div className="prose mb-8 max-w-none">
//               <h2 className="mb-4 text-2xl font-bold text-gray-900">
//                 Project Overview
//               </h2>
//               <p className="leading-relaxed text-gray-700">
//                 {project.fullDescription}
//               </p>
//             </div>

//             {/* Детали проекта */}
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//               {/* Вызовы */}
//               <div>
//                 <h3 className="mb-4 text-xl font-bold text-gray-900">
//                   Challenges
//                 </h3>
//                 <ul className="list-inside list-disc space-y-2 text-gray-700">
//                   {project.challenges.map((challenge, index) => (
//                     <li key={index}>{challenge}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Решения */}
//               <div>
//                 <h3 className="mb-4 text-xl font-bold text-gray-900">
//                   Solutions
//                 </h3>
//                 <ul className="list-inside list-disc space-y-2 text-gray-700">
//                   {project.solutions.map((solution, index) => (
//                     <li key={index}>{solution}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Боковая панель */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-8 rounded-lg bg-gray-50 p-6">
//               <h3 className="mb-6 text-xl font-bold text-gray-900">
//                 Project Details
//               </h3>

//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Client</h4>
//                   <p className="text-gray-700">{project.client}</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900">Duration</h4>
//                   <p className="text-gray-700">{project.duration}</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900">Category</h4>
//                   <p className="text-gray-700 capitalize">
//                     {project.category.replace("-", " ")}
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900">Technologies</h4>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Результаты */}
//               <div className="mt-8">
//                 <h4 className="mb-4 font-semibold text-gray-900">Results</h4>
//                 <ul className="space-y-3">
//                   {project.results.map((result, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
//                       <span className="text-gray-700">{result}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Теги */}
//               <div className="mt-8">
//                 <h4 className="mb-4 font-semibold text-gray-900">Tags</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Генерация статических параметров для SSG
// export async function generateStaticParams() {
//   return Object.keys(projectData).map((slug) => ({
//     slug: slug,
//   }));
// }

// export async function generateMetadata({ params }: ProjectPageProps) {
//   const project = projectData[params.slug];

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     };
//   }

//   return {
//     title: `${project.title} - Our Projects`,
//     description: project.description,
//   };
// }

// app/projects/[slug]/page.tsx

// ----------------------------------------------------------

// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { ProjectDetail } from "@/features/projects/model/types";

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

// interface ProjectPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   const project = projects.find((p) => p.slug === params.slug) as
//     | ProjectDetail
//     | undefined;

//   if (!project) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white py-12">
//       <div className="container mx-auto px-4">
//         {/* Хлебные крошки */}
//         <nav className="mb-8">
//           <Link href="/" className="text-purple-600 hover:text-purple-800">
//             Home
//           </Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <Link
//             href="/projects"
//             className="text-purple-600 hover:text-purple-800"
//           >
//             Projects
//           </Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-gray-600">{project.title}</span>
//         </nav>

//         {/* Заголовок проекта */}
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-gray-900">
//             {project.title}
//           </h1>
//           <p className="mx-auto max-w-3xl text-xl text-gray-600">
//             {project.description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//           {/* Основной контент */}
//           <div className="lg:col-span-2">
//             {/* Изображение проекта */}
//             <div className="mb-8 flex h-96 items-center justify-center rounded-lg bg-gray-200">
//               <span className="text-gray-500">
//                 Project Image: {project.title}
//               </span>
//             </div>

//             {/* Полное описание */}
//             <div className="prose mb-8 max-w-none">
//               <h2 className="mb-4 text-2xl font-bold text-gray-900">
//                 Project Overview
//               </h2>
//               <p className="leading-relaxed text-gray-700">
//                 {project.fullDescription}
//               </p>
//             </div>

//             {/* Детали проекта */}
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//               {/* Вызовы */}
//               <div>
//                 <h3 className="mb-4 text-xl font-bold text-gray-900">
//                   Challenges
//                 </h3>
//                 <ul className="list-inside list-disc space-y-2 text-gray-700">
//                   {project.challenges.map((challenge, index) => (
//                     <li key={index}>{challenge}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Решения */}
//               <div>
//                 <h3 className="mb-4 text-xl font-bold text-gray-900">
//                   Solutions
//                 </h3>
//                 <ul className="list-inside list-disc space-y-2 text-gray-700">
//                   {project.solutions.map((solution, index) => (
//                     <li key={index}>{solution}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Боковая панель */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-8 rounded-lg bg-gray-50 p-6">
//               <h3 className="mb-6 text-xl font-bold text-gray-900">
//                 Project Details
//               </h3>

//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Client</h4>
//                   <p className="text-gray-700">{project.client}</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900">Duration</h4>
//                   <p className="text-gray-700">{project.duration}</p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900">Category</h4>
//                   <p className="text-gray-700 capitalize">
//                     {project.category.replace("-", " ")}
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900">Technologies</h4>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Результаты */}
//               <div className="mt-8">
//                 <h4 className="mb-4 font-semibold text-gray-900">Results</h4>
//                 <ul className="space-y-3">
//                   {project.results.map((result, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
//                       <span className="text-gray-700">{result}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Теги */}
//               <div className="mt-8">
//                 <h4 className="mb-4 font-semibold text-gray-900">Tags</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Генерация статических параметров для SSG
// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export async function generateMetadata({ params }: ProjectPageProps) {
//   const project = projects.find((p) => p.slug === params.slug);

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     };
//   }

//   return {
//     title: `${project.title} - Our Projects`,
//     description: project.description,
//   };
// }

// frontend/src/app/(main)/portfolio/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailed } from "@/features/projects/ui/ProjectsDetailed/ProjectsDetailed";
import { getProjects, getProjectBySlug } from "@/features/projects/model/api";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

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
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ProjectDetailed project={project} />
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
