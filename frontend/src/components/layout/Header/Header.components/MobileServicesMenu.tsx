import Link from "next/link";
import { Service } from "@/features/services/model/types";

interface MobileServicesMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  services: Service[];
  isLoading: boolean;
  error: string | null;
}

export const MobileServicesMenu: React.FC<MobileServicesMenuProps> = ({
  isOpen,
  onToggle,
  onClose,
  services,
  isLoading,
  error,
}) => {
  const renderContent = () => {
    if (error) {
      return (
        <div className="py-2 pr-2 pl-4">
          <div className="mb-2 text-sm text-black-600">Ошибка загрузки услуг</div>
          <button
            onClick={() => window.location.reload()}
            className="text-xs text-blue-500 underline hover:text-blue-800"
          >
            Попробовать снова
          </button>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="py-2 pr-2 pl-4 text-sm text-gray-500">
          Загрузка услуг...
        </div>
      );
    }

    if (services.length === 0) {
      return (
        <div className="py-2 pr-2 pl-4 text-sm text-gray-500">
          Услуги не найдены
        </div>
      );
    }

    return services.map((service) => (
      <Link
        key={service._id}
        href={`/services/${service.slug}`}
        className="ml-4 block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        onClick={onClose}
      >
        {service.title}
      </Link>
    ));
  };

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      >
        Услуги
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && <div className="mt-1 space-y-1">{renderContent()}</div>}
    </div>
  );
};
