"use client";

import { Service } from "@/features/services/model/types";
import { BaseServiceTemplate } from "../../templates/BaseServiceTemplate";

export const DefaultService = ({ service }: { service: Service }) => {
  return (
    <BaseServiceTemplate service={service}>
      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Описание услуги</h2>
          <p className="text-gray-700">{service.description}</p>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Преимущества</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              <span>Профессиональный подход</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              <span>Гарантия качества</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              <span>Индивидуальные решения</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-500">✓</span>
              <span>Техническая поддержка</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Как мы работаем</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-4">
              <h4 className="font-semibold">Консультация</h4>
              <p className="text-sm text-gray-600">
                Анализируем ваши потребности и предлагаем оптимальное решение
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h4 className="font-semibold">Реализация</h4>
              <p className="text-sm text-gray-600">
                Разрабатываем и внедряем решение с учетом всех требований
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h4 className="font-semibold">Тестирование</h4>
              <p className="text-sm text-gray-600">
                Проводим полное тестирование и настройку системы
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h4 className="font-semibold">Поддержка</h4>
              <p className="text-sm text-gray-600">
                Обеспечиваем техническую поддержку и обслуживание
              </p>
            </div>
          </div>
        </section>
      </div>
    </BaseServiceTemplate>
  );
};
