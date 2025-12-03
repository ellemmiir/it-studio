// "use client";

// import { Service } from "@/features/services/model/types";
// import { BaseServiceTemplate } from "../../templates/BaseServiceTemplate";
// // import { SEOStats } from "./components/SEOStats";
// // import { KeywordAnalysis } from "@/features/services/ui/servicesPages/components/";
// import { CaseStudies } from "@/features/services/ui/servicesPages/components/CaseStudies";
// // import { FAQBlock } from "@/features/services/ui/components/FAQBlock";

// export const SeoPromotionService = ({ service }: { service: Service }) => {
//   return (
//     <BaseServiceTemplate
//       service={service}
//       additionalComponents={{
//         beforeContent: (
//           <>
//             Тут какие-то блоки
//             {/* <SEOStats /> */}
//             {/* <KeywordAnalysis /> */}
//           </>
//         ),
//         afterContent: (
//           <>
//             <CaseStudies category="seo" />
//             {/* <FAQBlock questions={service.faq} /> */}
//             Еще какой то блок
//           </>
//         ),
//       }}
//     >
//       {/* Уникальный контент для SEO-услуги */}
//       <div className="space-y-8">
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">
//             Как работает SEO-продвижение
//           </h2>
//           <p className="mb-4 text-gray-700">
//             SEO (Search Engine Optimization) — это комплекс мер по оптимизации
//             сайта для повышения его позиций в поисковых системах. Мы используем
//             только белые методы продвижения.
//           </p>
//         </section>

//         <section>
//           <h3 className="mb-4 text-xl font-semibold">Этапы работы</h3>
//           <div className="space-y-4">
//             {[
//               "Технический аудит сайта",
//               "Анализ конкурентов и подбор семантического ядра",
//               "Внутренняя оптимизация страниц",
//               "Создание качественного контента",
//               "Построение ссылочной массы",
//               "Мониторинг и аналитика",
//             ].map((step, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
//                   {index + 1}
//                 </div>
//                 <span className="text-gray-700">{step}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h3 className="mb-4 text-xl font-semibold">Наши технологии</h3>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "Google Analytics 4",
//               "Google Search Console",
//               "Ahrefs",
//               "Semrush",
//               "Screaming Frog",
//               "PageSpeed Insights",
//             ].map((tech) => (
//               <span
//                 key={tech}
//                 className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </section>
//       </div>
//     </BaseServiceTemplate>
//   );
// };

// "use client";

// import { Service } from "@/features/services/model/types";
// import { BaseServiceTemplate } from "../../templates/BaseServiceTemplate";

// export const ItInfrastructureService = ({ service }: { service: Service }) => {
//   // МЕНЯЕМ НАЗВАНИЕ
//   return (
//     <BaseServiceTemplate
//       service={service}
//       additionalComponents={{
//         beforeContent: (
//           <>
//             <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm">
//               <h2 className="mb-4 text-2xl font-bold text-gray-900">
//                 Развитие ИТ-инфраструктуры
//               </h2>
//               <p className="text-gray-700">
//                 Комплексное обслуживание и развитие ИТ-инфраструктуры для
//                 обеспечения стабильной работы бизнес-процессов и цифровой
//                 трансформации компании.
//               </p>
//             </div>
//           </>
//         ),
//       }}
//     >
//       {/* Уникальный контент для ИТ-инфраструктуры */}
//       <div className="space-y-8">
//         <section>
//           <h2 className="mb-4 text-2xl font-bold">
//             Что включает развитие ИТ-инфраструктуры
//           </h2>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             <div className="rounded-lg border border-gray-200 p-6">
//               <h3 className="mb-3 text-xl font-semibold text-blue-600">
//                 Мониторинг и поддержка
//               </h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Круглосуточный мониторинг систем</li>
//                 <li>• Резервное копирование данных</li>
//                 <li>• Проактивное обслуживание</li>
//                 <li>• Техническая документация</li>
//               </ul>
//             </div>
//             <div className="rounded-lg border border-gray-200 p-6">
//               <h3 className="mb-3 text-xl font-semibold text-green-600">
//                 Безопасность и защита
//               </h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Кибербезопасность и защита данных</li>
//                 <li>• Обновление и модернизация оборудования</li>
//                 <li>• Миграция в облачные решения</li>
//                 <li>• Поддержка серверов и сетей</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h3 className="mb-4 text-xl font-semibold">Этапы работы</h3>
//           <div className="space-y-4">
//             {[
//               "Аудит текущей инфраструктуры",
//               "Разработка стратегии развития",
//               "Внедрение решений и миграция",
//               "Настройка мониторинга и резервного копирования",
//               "Обучение сотрудников",
//               "Техническая поддержка 24/7",
//             ].map((step, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
//                   {index + 1}
//                 </div>
//                 <span className="text-gray-700">{step}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h3 className="mb-4 text-xl font-semibold">Наши технологии</h3>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "VMware / Hyper-V",
//               "Docker / Kubernetes",
//               "AWS / Azure",
//               "Cisco / MikroTik",
//               "Zabbix / Prometheus",
//               "Backup Exec / Veeam",
//             ].map((tech) => (
//               <span
//                 key={tech}
//                 className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </section>
//       </div>
//     </BaseServiceTemplate>
//   );
// };

"use client";

import { Service } from "@/features/services/model/types";
import { BaseServiceTemplate } from "../../templates/BaseServiceTemplate";
import Calculator from "@/components/layout/Calculator/Calculator";
import Calculator2 from "@/components/layout/Calculator/Calculator2";

export const ItInfrastructureService = ({ service }: { service: Service }) => {
  return (
    <BaseServiceTemplate
      service={service}
      additionalComponents={{
        beforeContent: (
          <>
            <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    Развитие ИТ-инфраструктуры
                  </h2>
                  <p className="max-w-2xl text-gray-700">
                    Комплексное обслуживание и развитие ИТ-инфраструктуры для
                    обеспечения стабильной работы бизнес-процессов и цифровой
                    трансформации компании.
                  </p>
                </div>
                <div className="shrink-0">
                  <Calculator />
                  <Calculator2 />
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
