"use client";

interface KeywordAnalysisProps {
  keywords?: Array<{
    keyword: string;
    volume: number;
    difficulty: number;
  }>;
}

export const KeywordAnalysis = ({ keywords }: KeywordAnalysisProps) => {
  const defaultKeywords = [
    { keyword: "SEO продвижение", volume: 5400, difficulty: 85 },
    { keyword: "раскрутка сайта", volume: 2900, difficulty: 72 },
    { keyword: "поисковая оптимизация", volume: 1800, difficulty: 65 },
  ];

  const data = keywords || defaultKeywords;

  return (
    <div className="mb-8 rounded-lg border border-gray-200 p-6">
      <h3 className="mb-4 text-xl font-semibold">Анализ ключевых слов</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="font-medium">{item.keyword}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {item.volume.toLocaleString()} запросов/мес
              </span>
              <div className="w-24">
                <div className="h-2 rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-red-500"
                    style={{ width: `${item.difficulty}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">
                  Сложность: {item.difficulty}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
