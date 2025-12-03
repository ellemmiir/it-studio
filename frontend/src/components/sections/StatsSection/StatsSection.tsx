export default function StatsSection() {
  const stats = [
    {
      value: "5",
      label: "гениев своего дела",
      description: "Не количеством, а умением",
    },
    {
      value: "0%",
      label: "бюрократии",
      description: "Только прямой контакт",
    },
    {
      value: "100%",
      label: "вовлеченности",
      description: "Основатели в каждом проекте",
    },
    {
      value: "∞",
      label: "креативных идей",
      description: "Свежий взгляд на ваши задачи",
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h2 className="mb-10 text-5xl font-bold text-gray-900">Почему мы?</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Мы молоды, амбициозны и делаем каждому проекту как для себя
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-center">
                {/* Число */}
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
                  {stat.value}
                </div>

                {/* Заголовок */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {stat.label}
                </h3>

                {/* Описание */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            <span className="font-medium text-gray-700">
              Готовы начать ваш проект сегодня
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
