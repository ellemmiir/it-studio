"use client";

import { ReactNode } from "react";
import { Service } from "../../model/types";
// import Breadcrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import { formatPriceRange, isDumpActive } from "../../model/format";
import DumpingLabel from "@/components/ui/Dumpimg/Dumping";

interface BaseServiceTemplateProps {
  service: Service;
  children: ReactNode;
  additionalComponents?: {
    beforeContent?: ReactNode;
    afterContent?: ReactNode;
    sidebar?: ReactNode;
  };
}

export const BaseServiceTemplate = ({
  service,
  children,
  additionalComponents,
}: BaseServiceTemplateProps) => {
  const dumpActive = isDumpActive(service.priceDump.activeUntil);
  const currentPriceRange = dumpActive
    ? service.priceDump
    : service.pricePostDump;

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <article className="service-detailed">
      {/* Хлебные крошки */}
      <div className="mb-6">
        {/* <Breadcrumbs items={breadcrumbs} /> */}
        Тут крошки
      </div>

      {/* Заголовок и демпинг лейбл */}
      <header className="relative mb-8 rounded-lg bg-gradient-to-r from-gray-50 to-white p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:pr-8">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600">{service.description}</p>
          </div>

          {dumpActive && (
            <div className="mt-4 lg:mt-0">
              <DumpingLabel activeUntil={service.priceDump.activeUntil} />
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Основной контент */}
        <div className="lg:col-span-8">
          {/* Дополнительные компоненты перед контентом */}
          {additionalComponents?.beforeContent}

          {/* Основной контент услуги */}
          <div className="prose prose-lg max-w-none">{children}</div>

          {/* Дополнительные компоненты после контента */}
          {additionalComponents?.afterContent}
        </div>

        {/* Сайдбар */}
        <div className="lg:col-span-4">
          {/* Блок цен */}
          <div className="sticky top-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Стоимость услуги</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-600">Рыночная цена:</span>
                <span className="font-medium text-gray-500 line-through">
                  {formatPriceRange(
                    service.marketPriceRange.min,
                    service.marketPriceRange.max,
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  {dumpActive ? "Акционная цена:" : "Наша цена:"}
                </span>
                <span className="text-accent-600 text-2xl font-bold">
                  {formatPriceRange(
                    currentPriceRange.min,
                    currentPriceRange.max,
                  )}
                </span>
              </div>

              <div className="pt-4">
                <button className="bg-accent-600 hover:bg-accent-700 w-full rounded-lg px-4 py-3 font-semibold text-white transition-colors">
                  Заказать услугу
                </button>
                <p className="mt-2 text-center text-sm text-gray-500">
                  Бесплатная консультация
                </p>
              </div>
            </div>
          </div>

          {/* Дополнительные компоненты в сайдбаре */}
          {additionalComponents?.sidebar}
        </div>
      </div>

      {/* Общие блоки для всех услуг */}
      <div className="mt-12 border-t pt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-4">
            Тут могут быть общие блоки
          </div>
        </div>
      </div>
    </article>
  );
};
