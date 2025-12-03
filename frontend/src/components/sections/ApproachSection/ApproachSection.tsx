import React from "react";

const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Вовлечение клиента",
      description:
        "Не приносим готовые решения. Проходим весь путь вместе с клиентом",
    },
    {
      number: "02",
      title: "Экспертиза в цифровом брендинге",
      description: "Исследуем, ищем варианты решений, фиксируем план действий",
    },
    {
      number: "03",
      title: "Дизайн-культура",
      description:
        "Результаты работы понятны и эстетичны, ими удобно пользоваться",
    },
    {
      number: "04",
      title: "Комплексный подход",
      description:
        "СТРАТЕГИЯ • БРЕНД-ПЛАТФОРМА • ПОЗИЦИОНИРОВАНИЕ • ОБРАЗОВАНИЕ",
    },
    {
      number: "05",
      title: "Сопровождение на всех этапах",
      description:
        "Помогаем в разных сферах: от концепции до реализации и поддержки",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Наш подход
        </h2>

        <div className="relative">
          {/* Соединительная линия */}
          <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b from-blue-200 to-blue-100 md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start gap-6 md:flex-row"
              >
                {/* Номер с декоративным элементом */}
                <div className="relative flex items-center justify-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                    <span className="text-lg font-bold text-blue-600">
                      {step.number}
                    </span>
                  </div>

                  {/* Точка на соединительной линии */}
                  <div className="absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 md:block"></div>
                </div>

                {/* Контент */}
                <div className="flex-1 rounded-2xl bg-gray-50 p-6 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
