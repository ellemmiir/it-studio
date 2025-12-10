interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  categories?: Array<{ value: string; label: string }>;
}

export const ProjectFilters = ({
  activeFilter,
  onFilterChange,
  categories = [],
}: ProjectFiltersProps) => {
  const allCategories = [{ value: "all", label: "Все проекты" }, ...categories];

  return (
    <div className="flex flex-wrap gap-4">
      {allCategories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`rounded-full px-6 py-2 transition-colors ${
            activeFilter === value
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
