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
        {Array.from({ length: 5 }).map((_, i) => (
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
