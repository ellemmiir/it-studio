"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Компонент команды
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

// Компонент ценности
interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function AboutPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Данные команды
  const teamData: TeamMember[] = [
    {
      id: 1,
      name: "Александр Петров",
      position: "CEO & Основатель",
      bio: "Более 15 лет опыта в веб-разработке и управлении IT-проектами. Основал студию с целью создавать цифровые решения, которые действительно работают.",
      image: "/team/alexander.jpg",
    },
    {
      id: 2,
      name: "Мария Иванова",
      position: "Главный дизайнер",
      bio: "Специализируется на UX/UI дизайне с 2012 года. Создала более 200 успешных интерфейсов для различных бизнесов.",
      image: "/team/maria.jpg",
    },
    {
      id: 3,
      name: "Дмитрий Смирнов",
      position: "Lead Developer",
      bio: "Full-stack разработчик с экспертизой в современных фреймворках. Отвечает за архитектуру и качество кода всех проектов.",
      image: "/team/dmitry.jpg",
    },
  ];

  // Ценности компании
  const valuesData: ValueItem[] = [
    {
      id: 1,
      title: "Клиентоцентричность",
      description:
        "Мы начинаем каждый проект с глубокого понимания бизнеса клиента и его целей.",
      icon: "🎯",
    },
    {
      id: 2,
      title: "Прозрачность",
      description:
        "Четкие сроки, понятная смета и регулярная отчетность на всех этапах работы.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "Инновации",
      description:
        "Постоянно следим за трендами и внедряем современные технологии в проекты.",
      icon: "🚀",
    },
    {
      id: 4,
      title: "Качество",
      description:
        "Не идем на компромиссы в вопросах качества кода, дизайна и пользовательского опыта.",
      icon: "⭐",
    },
  ];

  // FAQ для страницы "О нас"
  const aboutFAQ = [
    {
      id: 1,
      question: "Сколько лет существует ваша студия?",
      answer:
        "Наша студия была основана в 2018 году. За это время мы успели реализовать более 150 проектов для клиентов из разных сфер бизнеса.",
    },
    {
      id: 2,
      question: "Какие технологии вы используете?",
      answer:
        "Мы работаем с современным стеком технологий: React/Next.js для фронтенда, Node.js/Nest.js для бэкенда, TypeScript, PostgreSQL/MongoDB для баз данных, Docker для контейнеризации.",
    },
    {
      id: 3,
      question: "Как строится процесс работы?",
      answer:
        "Мы используем гибридную методологию, сочетающую элементы Agile и Waterfall. Процесс включает анализ, проектирование, разработку, тестирование и поддержку.",
    },
    {
      id: 4,
      question: "Предоставляете ли вы гарантии?",
      answer:
        "Да, мы предоставляем 6 месяцев гарантийной поддержки на все разработанные сайты и приложения. В рамках гарантии исправляем все обнаруженные ошибки.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        {/* Hero секция */}
        <section className="mb-28">
          <div className="mb-16">
            <h1 className="text-title mb-10 text-6xl font-bold">О нас</h1>
            <p className="text-grey-800 max-w-3xl text-xl leading-relaxed">
              Мы — команда профессионалов, которая превращает сложные
              бизнес-задачи в элегантные цифровые решения. С 2018 года помогаем
              компаниям расти в интернете, создавая сайты и приложения, которые
              действительно работают.
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="border-grey-300 rounded-lg border p-6">
              <div className="text-title mb-2 text-4xl font-bold">150+</div>
              <div className="text-grey-800">Успешных проектов</div>
            </div>
            <div className="border-grey-300 rounded-lg border p-6">
              <div className="text-title mb-2 text-4xl font-bold">5 лет</div>
              <div className="text-grey-800">Опыта на рынке</div>
            </div>
            <div className="border-grey-300 rounded-lg border p-6">
              <div className="text-title mb-2 text-4xl font-bold">98%</div>
              <div className="text-grey-800">Довольных клиентов</div>
            </div>
            <div className="border-grey-300 rounded-lg border p-6">
              <div className="text-title mb-2 text-4xl font-bold">12</div>
              <div className="text-grey-800">Специалистов в команде</div>
            </div>
          </div>
        </section>

        {/* Наша миссия */}
        <section className="mb-28">
          <div className="border-grey-300 border-b pb-16">
            <h2 className="text-title mb-10 text-5xl font-bold">Наша миссия</h2>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-grey-800 mb-6 text-lg leading-relaxed">
                  Мы верим, что технологии должны решать реальные бизнес-задачи,
                  а не создавать новые. Наша миссия — делать цифровую среду
                  доступной, понятной и эффективной для каждого бизнеса.
                </p>
                <p className="text-grey-800 text-lg leading-relaxed">
                  Мы не просто создаем сайты — мы строим цифровые экосистемы,
                  которые помогают нашим клиентам достигать своих бизнес-целей,
                  увеличивать продажи и улучшать взаимодействие с клиентами.
                </p>
              </div>
              <div className="bg-grey-200 rounded-xl p-8">
                <h3 className="text-title mb-6 text-2xl font-bold">
                  Наш подход
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">✓</span>
                    <span className="text-grey-800">
                      Глубокий анализ бизнеса и целей
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">✓</span>
                    <span className="text-grey-800">
                      Индивидуальные решения без шаблонов
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">✓</span>
                    <span className="text-grey-800">
                      Постоянная коммуникация и прозрачность
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-3 text-xl">✓</span>
                    <span className="text-grey-800">
                      Поддержка после запуска
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-28">
          <h2 className="text-title mb-16 text-5xl font-bold">Наши ценности</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valuesData.map((value) => (
              <div
                key={value.id}
                className="border-grey-300 hover:bg-grey-200 rounded-lg border p-8 transition-colors duration-300"
              >
                <div className="mb-4 text-3xl">{value.icon}</div>
                <h3 className="text-title mb-4 text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-grey-800">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Команда */}
        <section className="mb-28">
          <div className="mb-16 flex justify-between">
            <h2 className="text-title text-5xl font-bold">Наша команда</h2>
            <p className="text-grey-800 max-w-2xl text-lg">
              Встречайте наших ключевых специалистов — экспертов, которые
              воплощают ваши идеи в жизнь.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="group overflow-hidden rounded-lg bg-white transition-all duration-300"
              >
                <div className="bg-grey-300 relative h-80 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Замените на реальные изображения */}
                  <div className="bg-grey-400 flex h-full w-full items-center justify-center">
                    <span className="text-grey-800 text-lg">
                      Фото {member.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-title mb-2 text-xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 mb-4 font-medium">
                    {member.position}
                  </p>
                  <p className="text-grey-800">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ секция (стилизованная как в примере) */}
        <section className="mb-28">
          <div className="mb-20">
            <h2 className="text-title mb-10 text-5xl font-bold">
              Частые вопросы
            </h2>
          </div>

          <div>
            {aboutFAQ.map((item, index) => (
              <div
                key={item.id}
                className={`border-grey-300 hover:bg-grey-200 cursor-pointer overflow-hidden border-t transition-all duration-300 ${
                  index === aboutFAQ.length - 1 ? "border-b" : ""
                }`}
                onClick={() => toggleFAQ(item.id)}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-6">
                    <div>
                      <h4 className="text-title text-xl font-semibold">
                        {item.question}
                      </h4>
                    </div>
                  </div>

                  <div className="ml-4 shrink-0">
                    <svg
                      className={`h-6 w-6 transform text-gray-400 transition-transform duration-300 ${
                        activeFAQ === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeFAQ === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="border-grey-300 pl-6">
                      <p className="text-grey-800 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA секция */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-12">
          <div className="text-center">
            <h2 className="text-title mb-6 text-4xl font-bold">
              Готовы начать проект?
            </h2>
            <p className="text-grey-800 mx-auto mb-10 max-w-2xl text-xl">
              Обсудим ваши задачи и предложим оптимальное решение
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-gray-800"
              >
                Обсудить проект
              </Link>
              <Link
                href="/services"
                className="border-grey-300 hover:bg-grey-200 rounded-lg border px-8 py-4 text-lg font-semibold transition-colors duration-300"
              >
                Посмотреть услуги
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
