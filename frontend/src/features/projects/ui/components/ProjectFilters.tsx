interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProjectFilters = ({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) => {
  const categories = [
    "all",
    "it-infrastructure",
    "ip-telephony",
    "audit",
    "software-development",
    "video-surveillance",
    "devops",
    "it-security-audit",
    "ai-integration",
  ];

  const categoryLabels: { [key: string]: string } = {
    all: "Все",
    "it-infrastructure": "IT-инфраструктура",
    "ip-telephony": "IP-телефония",
    audit: "Аудит",
    "software-development": "Разработка ПО",
    "video-surveillance": "Видеонаблюдение",
    devops: "DevOps",
    "it-security-audit": "Аудит ИТ и ИБ",
    "ai-integration": "Интеграция ИИ",
  };

  return (
    <div className="border-grey-300 mb-13 flex flex-wrap justify-normal gap-4 border-b pb-7">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`cursor-pointer rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ${
            activeFilter === category
              ? "bg-black text-white shadow-lg"
              : "hover:bg-grey-300 bg-grey-200 text-grey-900"
          }`}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
};
