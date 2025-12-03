"use client";

interface CaseStudy {
  title: string;
  description: string;
  result: string;
  image?: string;
}

interface CaseStudiesProps {
  category?: string;
}

export const CaseStudies = ({ category }: CaseStudiesProps) => {
  const cases: CaseStudy[] = [
    {
      title: "Интернет-магазин электроники",
      description: "SEO-продвижение за 6 месяцев",
      result: "Рост трафика на 240%",
    },
    {
      title: "Сервис доставки еды",
      description: "Контекстная реклама и оптимизация",
      result: "Снижение стоимости заявки на 35%",
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-bold">Кейсы наших клиентов</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cases.map((caseStudy, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 p-6 shadow-sm"
          >
            <h4 className="mb-2 text-xl font-semibold">{caseStudy.title}</h4>
            <p className="mb-4 text-gray-600">{caseStudy.description}</p>
            <div className="rounded bg-green-50 px-3 py-2">
              <span className="font-semibold text-green-700">
                Результат: {caseStudy.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
