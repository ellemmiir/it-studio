// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { getServices, getServiceBySlug } from "@/features/services/model/api";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const service = await getServiceBySlug(params.slug);

//   if (!service) {
//     return {
//       title: "Услуга не найдена",
//     };
//   }

//   return {
//     title: `${service.title} | Наши услуги`,
//     description: service.description,
//     openGraph: {
//       title: service.title,
//       description: service.description,
//     },
//   };
// }

// // Маппинг slug услуги на компонент
// const getServiceComponent = async (slug: string) => {
//   switch (slug) {
//     case "seo-promotion":
//       const { SeoPromotionService } = await import(
//         "@/features/services/ui/servicesPages/it-infrastructure"
//       );
//       return SeoPromotionService;
//     // case "web-development":
//     //   const { WebDevelopmentService } = await import(
//     //     "@/features/services/ui/services/web-development"
//     //   );
//     //   return WebDevelopmentService;
//     // case "context-ads":
//     //   const { ContextAdsService } = await import(
//     //     "@/features/services/ui/services/context-ads"
//     //   );
//     //   return ContextAdsService;
//     // case "smm":
//     //   const { SMMService } = await import(
//     //     "@/features/services/ui/services/smm"
//     //   );
//     //   return SMMService;
//     // case "design":
//     //   const { DesignService } = await import(
//     //     "@/features/services/ui/services/design"
//     //   );
//     //   return DesignService;
//     // case "audit":
//     //   const { AuditService } = await import(
//     //     "@/features/services/ui/services/audit"
//     //   );
//     //   return AuditService;
//     // case "support":
//     //   const { SupportService } = await import(
//     //     "@/features/services/ui/services/support"
//     //   );
//     //   return SupportService;
//     // case "consulting":
//     //   const { ConsultingService } = await import(
//     //     "@/features/services/ui/services/consulting"
//     //   );
//     //   return ConsultingService;
//     default:
//       // Дефолтный компонент, если slug не найден
//       const { DefaultService } = await import(
//         "@/features/services/ui/servicesPages/default"
//       );
//       return DefaultService;
//   }
// };

// export default async function ServicePage({ params }: Props) {
//   const service = await getServiceBySlug(params.slug);

//   if (!service) {
//     notFound();
//   }

//   const ServiceComponent = await getServiceComponent(params.slug);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <ServiceComponent service={service} />
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   const services = await getServices();

//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { getServices, getServiceBySlug } from "@/features/services/model/api";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const service = await getServiceBySlug(params.slug);

//   if (!service) {
//     return {
//       title: "Услуга не найдена",
//     };
//   }

//   return {
//     title: `${service.title} | Наши услуги`,
//     description: service.description,
//     openGraph: {
//       title: service.title,
//       description: service.description,
//       type: "article",
//     },
//   };
// }

// // Кешируем mapping для быстрого доступа
// const SERVICE_COMPONENTS: Record<string, () => Promise<any>> = {
//   "it-infrastructure": () =>
//     import("@/features/services/ui/servicesPages/it-infrastructure"),
//   // "web-development": () =>
//   //   import("@/features/services/ui/services/web-development"),
//   // "context-ads": () => import("@/features/services/ui/services/context-ads"),
//   // smm: () => import("@/features/services/ui/services/smm"),
//   // design: () => import("@/features/services/ui/services/design"),
//   // audit: () => import("@/features/services/ui/services/audit"),
//   // support: () => import("@/features/services/ui/services/support"),
//   // consulting: () => import("@/features/services/ui/services/consulting"),
// };

// const getServiceComponent = async (slug: string) => {
//   const importFn = SERVICE_COMPONENTS[slug];

//   if (!importFn) {
//     // Дефолтный компонент для неизвестных slug
//     const { DefaultService } = await import(
//       "@/features/services/ui/servicesPages/default"
//     );
//     return DefaultService;
//   }

//   try {
//     const module = await importFn();
//     return module[Object.keys(module)[0]]; // Берем первый экспорт
//   } catch (error) {
//     console.error(`Ошибка загрузки компонента для услуги ${slug}:`, error);
//     const { DefaultService } = await import(
//       "@/features/services/ui/servicesPages/default"
//     );
//     return DefaultService;
//   }
// };

// export default async function ServicePage({ params }: Props) {
//   const service = await getServiceBySlug(params.slug);

//   if (!service) {
//     notFound();
//   }

//   const ServiceComponent = await getServiceComponent(params.slug);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <ServiceComponent service={service} />
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   const services = await getServices();

//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/features/services/model/api";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Услуга не найдена",
    };
  }

  return {
    title: `${service.title} | Наши услуги`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "article",
    },
  };
}

// Кешируем mapping для быстрого доступа
const SERVICE_COMPONENTS: Record<string, () => Promise<any>> = {
  "it-infrastructure": () =>
    import("@/features/services/ui/servicesPages/it-infrastructure"),
  // "ip-telephony": () =>
  //   import("@/features/services/ui/servicesPages/ip-telephony"),
  // "regulatory-compliance-audit": () =>
  //   import("@/features/services/ui/servicesPages/regulatory-compliance-audit"),
  // "software-development": () =>
  //   import("@/features/services/ui/servicesPages/software-development"),
  // "video-surveillance-security": () =>
  //   import("@/features/services/ui/servicesPages/video-surveillance-security"),
  // "devops-practices-implementation": () =>
  //   import(
  //     "@/features/services/ui/servicesPages/devops-practices-implementation"
  //   ),
  // "it-security-audit": () =>
  //   import("@/features/services/ui/servicesPages/it-security-audit"),
  // "ai-bi-integration": () =>
  //   import("@/features/services/ui/servicesPages/ai-bi-integration"),
};

const getServiceComponent = async (slug: string) => {
  const importFn = SERVICE_COMPONENTS[slug];

  if (!importFn) {
    // Дефолтный компонент для неизвестных slug
    const { DefaultService } = await import(
      "@/features/services/ui/servicesPages/default"
    );
    return DefaultService;
  }

  try {
    const module = await importFn();
    // ПРОБЛЕМА: Вы экспортируете SeoPromotionService, но ожидаете ItInfrastructureService
    // Решение: используем правильное имя экспорта или берем первый экспорт
    if (module.ItInfrastructureService) {
      return module.ItInfrastructureService;
    }
    // Или берем первый экспортированный компонент
    const componentName = Object.keys(module).find(
      (key) => key.endsWith("Service") || key === "default",
    );
    return module[componentName || "default"];
  } catch (error) {
    console.error(`Ошибка загрузки компонента для услуги ${slug}:`, error);
    const { DefaultService } = await import(
      "@/features/services/ui/servicesPages/default"
    );
    return DefaultService;
  }
};

export default async function ServicePage({ params }: Props) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const ServiceComponent = await getServiceComponent(params.slug);

  return (
    <div>
      <ServiceComponent service={service} />
    </div>
  );
}

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}
