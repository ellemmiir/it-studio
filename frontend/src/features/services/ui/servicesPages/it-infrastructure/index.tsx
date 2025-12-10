"use client";

import { Service } from "@/features/services/model/types";
import { BaseServiceTemplate } from "../../templates/BaseServiceTemplate";
import CalculatorInfrustructure from "@/components/layout/Calculator/Calculator-Infrustructure";
// import Calculator2 from "@/components/layout/Calculator/Calculator2";

export const ItInfrastructureService = ({ service }: { service: Service }) => {
  return (
    <BaseServiceTemplate
      service={service}
      additionalComponents={{
        calculator: (
          <>
            <div className="bg-grey-200 mb-8 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    Рассчитайте стоимость онлайн
                  </h2>
                  <p className="max-w-2xl text-gray-700">
                    Узнайте точную цену услуги за 2 минуты с помощью нашего
                    калькулятора
                  </p>
                </div>
                <div className="shrink-0">
                  <CalculatorInfrustructure />
                </div>
              </div>
            </div>
          </>
        ),
      }}
    >
      {/* Уникальный контент для ИТ-инфраструктуры */}
      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            Что включает развитие ИТ-инфраструктуры
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                Мониторинг и поддержка
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Круглосуточный мониторинг систем</li>
                <li>• Резервное копирование данных</li>
                <li>• Проактивное обслуживание</li>
                <li>• Техническая документация</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-xl font-semibold text-green-600">
                Безопасность и защита
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Кибербезопасность и защита данных</li>
                <li>• Обновление и модернизация оборудования</li>
                <li>• Миграция в облачные решения</li>
                <li>• Поддержка серверов и сетей</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Этапы работы</h3>
          <div className="space-y-4">
            {[
              "Аудит текущей инфраструктуры",
              "Разработка стратегии развития",
              "Внедрение решений и миграция",
              "Настройка мониторинга и резервного копирования",
              "Обучение сотрудников",
              "Техническая поддержка 24/7",
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  {index + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Наши технологии</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "VMware / Hyper-V",
              "Docker / Kubernetes",
              "AWS / Azure",
              "Cisco / MikroTik",
              "Zabbix / Prometheus",
              "Backup Exec / Veeam",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </BaseServiceTemplate>
  );
};
