"use client";

export default function AboutSection() {
  const steps = [
    {
      number: "1",
      title: "Заявка",
      description: "Вы оставляете заявку, мы связываемся для уточнения деталей",
    },
    {
      number: "2",
      title: "Бриф",
      description: "Глубокий анализ задач, составление технического задания",
    },
    {
      number: "3",
      title: "Дизайн",
      description: "Разработка интерфейса, утверждение концепции",
    },
    {
      number: "4",
      title: "Верстка",
      description: "Адаптивная верстка, программирование функционала",
    },
    {
      number: "5",
      title: "Тесты",
      description: "Тестирование на всех устройствах и браузерах",
    },
    {
      number: "6",
      title: "Запуск",
      description: "Размещение на хостинге, обучение, поддержка",
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        <div className="mb-16">
          <h2 className="text-title mb-6 text-5xl font-bold">Процесс работы</h2>
          <p className="text-grey-800 max-w-xl text-xl">
            Прозрачный и структурированный подход к каждому проекту, от первой
            встречи до сдачи и поддержки.
          </p>
        </div>

        <div className="relative">
          {/* Горизонтальные стрелки для десктопа */}
          <div className="absolute top-1/2 right-0 left-0 hidden -translate-y-1/2 lg:block">
            <div className="mx-auto flex w-4/5 items-center justify-between px-10">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative w-1/5">
                  <div className="h-0.5 w-full bg-gray-300"></div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Вертикальные стрелки для планшетов */}
          <div className="absolute top-0 left-1/2 hidden -translate-x-1/2 md:block lg:hidden">
            <div className="flex h-full flex-col items-center justify-between py-12">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="relative h-1/3">
                  <div className="h-20 w-0.5 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <svg
                      className="h-5 w-5 rotate-90 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Стрелки для мобилок между строками */}
          <div className="absolute top-0 left-1/2 block -translate-x-1/2 md:hidden">
            <div className="flex h-full flex-col items-center justify-between py-24">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative h-16">
                  <div className="h-16 w-0.5 bg-gray-300"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <svg
                      className="h-5 w-5 rotate-90 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Карточки шагов */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="border-grey-300 hover:bg-grey-50 relative rounded-xl border bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  {/* Соединительные точки */}
                  <div className="absolute top-1/2 -right-3 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-lg lg:block">
                    <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400"></div>
                  </div>

                  <div className="mb-4 flex items-center">
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                        {step.number}
                      </div>
                      {/* Анимация точки */}
                      <div className="absolute inset-0 animate-ping rounded-full bg-black opacity-20"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-title text-lg font-bold">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-grey-800">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-grey-600 inline-flex items-center text-sm">
              <span className="mr-2">Весь процесс от</span>
              <span className="mx-2 rounded-full bg-green-100 px-3 py-1 text-green-800">
                2 недель
              </span>
              <span className="ml-2">до</span>
              <span className="mx-2 rounded-full bg-blue-100 px-3 py-1 text-blue-800">
                3 месяцев
              </span>
              <span className="ml-2">в зависимости от сложности</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
