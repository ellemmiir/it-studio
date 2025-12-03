"use client";

interface SEOStatsProps {
  stats?: {
    trafficIncrease: number;
    positions: number;
    keywords: number;
  };
}

export const SEOStats = ({ stats }: SEOStatsProps) => {
  const defaultStats = {
    trafficIncrease: 150,
    positions: 85,
    keywords: 1000,
  };

  const data = stats || defaultStats;

  return (
    <div className="mb-10 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Результаты наших клиентов
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600">
            +{data.trafficIncrease}%
          </div>
          <div className="mt-2 text-gray-600">Рост трафика</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600">
            {data.positions}%
          </div>
          <div className="mt-2 text-gray-600">Позиций в ТОП-10</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600">
            {data.keywords}+
          </div>
          <div className="mt-2 text-gray-600">Ключевых слов</div>
        </div>
      </div>
    </div>
  );
};
