"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Как выбрать веб-студию?",
      answer:
        "При выборе веб-студии обратите внимание на портфолио, отзывы клиентов, опыт работы и используемые технологии. Важно, чтобы студия понимала ваши бизнес-цели и могла предложить оптимальное решение.",
    },
    {
      id: 2,
      question: "Сколько стоит сайт и сколько времени его делают",
      answer:
        "Стоимость сайта зависит от его сложности, функционала и дизайна. Простой лендинг может стоить от 20 000 рублей и создаваться за 1-2 недели, а интернет-магазин — от 50 000 рублей с разработкой 1-2 месяца.",
    },
    {
      id: 3,
      question: "Важно ли, что веб студия в другом городе",
      answer:
        "Современные технологии позволяют эффективно работать удаленно. Главное — качество коммуникации. Мы используем онлайн-встречи, трекеры задач и регулярные отчеты, чтобы клиенты из любого города чувствовали себя комфортно.",
    },
    {
      id: 4,
      question: "Можно ли устроиться к вам работать?",
      answer:
        "Да, мы всегда рады талантливым специалистам. Отправьте свое резюме на hr@example.com, и мы рассмотрим вашу кандидатуру. В настоящее время особенно нужны фронтенд- и бэкенд-разработчики.",
    },
    {
      id: 5,
      question: "Как заказать сайт и что потребуется",
      answer:
        "Для заказа сайта свяжитесь с нами через форму на сайте или по телефону. Нам понадобится информация о вашем бизнесе, целях создания сайта, предпочтениях по дизайну и примеры сайтов, которые вам нравятся.",
    },
    {
      id: 6,
      question: "Можно ли купить готовый сайт",
      answer:
        "Да, у нас есть каталог готовых решений для различных сфер бизнеса. Готовые сайты можно быстро адаптировать под ваши нужды и запустить в течение нескольких дней.",
    },
    {
      id: 7,
      question: "Как раскрутить сайт или привлечь клиентов",
      answer:
        "Для продвижения сайта мы используем комплексный подход: SEO-оптимизация, контекстная реклама, ведение социальных сетей, email-маркетинг. Разрабатываем индивидуальную стратегию продвижения для каждого клиента.",
    },
  ];

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        {/* Заголовок */}
        <div className="mb-20">
          <h2 className="text-title mb-10 text-5xl font-bold">FAQ</h2>
        </div>

        {/* Список FAQ */}
        <div>
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`border-grey-300 hover:bg-grey-200 cursor-pointer overflow-hidden border-t transition-all duration-300 ${
                index === faqData.length - 1 ? "border-b" : ""
              }`}
              onClick={() => toggleItem(item.id)}
            >
              {/* Заголовок вопроса */}
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-6">
                  <div>
                    <h4 className="text-title text-xl font-semibold">
                      {item.question}
                    </h4>
                  </div>
                </div>

                {/* Иконка стрелки */}
                <div className="ml-4 shrink-0">
                  <svg
                    className={`h-6 w-6 transform text-gray-400 transition-transform duration-300 ${
                      activeItem === item.id ? "rotate-180" : ""
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

              {/* Ответ */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeItem === item.id
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
      </div>
    </div>
  );
}
