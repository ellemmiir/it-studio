"use client";

import { useProjectFilters } from "@/features/projects/model/hooks";

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProjectFilters = ({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) => {
  const { data: filters, loading } = useProjectFilters();

  if (loading) {
    return (
      <div className="flex animate-pulse flex-wrap gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-10 w-32 rounded-full bg-gray-200" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`rounded-full px-6 py-3 transition-all duration-200 ${
            activeFilter === value
              ? "scale-105 transform bg-purple-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
