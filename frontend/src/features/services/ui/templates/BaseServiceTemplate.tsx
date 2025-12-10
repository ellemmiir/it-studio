"use client";

import { ReactNode } from "react";
import { Service } from "../../model/types";
import { formatPriceRange, isDumpActive } from "../../model/format";

interface BaseServiceTemplateProps {
  service: Service;
  children: ReactNode;
  additionalComponents?: {
    calculator?: ReactNode;
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

  return (
    <article className="mx-auto max-w-380 px-4">
      <div className="pt-40 pb-20">
        <h1 className="text-title mb-10 text-7xl font-semibold">
          {service.title}
        </h1>
        <div className="max-w-4xl">
          <p className="text-grey-800 text-lg">{service.description}</p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Основной контент */}
          <div className="lg:col-span-8">
            {/* Дополнительные компоненты перед контентом */}
            {additionalComponents?.calculator}

            {/* Основной контент услуги */}
            <div className="prose prose-lg max-w-none">{children}</div>
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

                <div className="flex flex-col pt-4">
                  <button className="btn">Заказать услугу</button>
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
      </div>
    </article>
  );
};
