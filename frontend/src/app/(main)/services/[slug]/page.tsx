import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailed } from "@/features/services/ui/ServiceDetailed/ServiceDetailed";
import { getServices } from "@/features/services/model/api";

interface Props {
  params: {
    slug: string;
  };
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const services = await getServices();
  const service = services.find((s) => s.slug === params.slug);

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
    },
  };
}

// Основной компонент страницы
export default async function ServicePage({ params }: Props) {
  const services = await getServices();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound(); // Покажет 404 страницу
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ServiceDetailed service={service} />
    </div>
  );
}

// Генерация статических параметров для 8 услуг
export async function generateStaticParams() {
  const services = await getServices();
  console.log("Services from API:", services);

  return services.map((service) => ({
    slug: service.slug,
  }));
}
