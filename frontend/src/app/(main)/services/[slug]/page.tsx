import { Metadata } from "next";
import { notFound } from "next/navigation";
// Импортируем сервис
import { servicesService } from "@/features/services/model/services.service";
import { Service } from "@/features/services/model/types";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await servicesService.getBySlug(params.slug);

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

// Тип для компонента услуги
type ServiceComponentType = React.ComponentType<{ service: Service }>;

// Явно указываем импорт для каждой услуги
const SERVICE_COMPONENTS: Record<string, () => Promise<ServiceComponentType>> =
  {
    "it-infrastructure": async () => {
      const module = await import(
        "@/features/services/ui/servicesPages/it-infrastructure"
      );
      // Явно возвращаем ItInfrastructureService
      return module.ItInfrastructureService;
    },
    // Пример для будущих услуг (раскомментировать при создании):
    // "ip-telephony": async () => {
    //   const module = await import("@/features/services/ui/servicesPages/ip-telephony");
    //   return module.IpTelephonyService; // Убедитесь, что компонент экспортируется под этим именем
    // },
    // "regulatory-compliance-audit": async () => {
    //   const module = await import("@/features/services/ui/servicesPages/regulatory-compliance-audit");
    //   return module.RegulatoryComplianceAuditService;
    // },
    // "software-development": async () => {
    //   const module = await import("@/features/services/ui/servicesPages/software-development");
    //   return module.SoftwareDevelopmentService;
    // },
  };

const getServiceComponent = async (
  slug: string,
): Promise<ServiceComponentType | null> => {
  const importFn = SERVICE_COMPONENTS[slug];

  // Если услуга не найдена в mapping - возвращаем null
  if (!importFn) {
    return null;
  }

  try {
    // Выполняем импорт и возвращаем компонент
    return await importFn();
  } catch (error) {
    console.error(`Ошибка загрузки компонента для услуги ${slug}:`, error);
    return null;
  }
};

export default async function ServicePage({ params }: Props) {
  const service = await servicesService.getBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const ServiceComponent = await getServiceComponent(params.slug);

  // Если компонент не найден - показываем 404
  if (!ServiceComponent) {
    notFound();
  }

  return (
    <div>
      <ServiceComponent service={service} />
    </div>
  );
}

export async function generateStaticParams() {
  const services = await servicesService.getAll();

  return services.map((service) => ({
    slug: service.slug,
  }));
}
