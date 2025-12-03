import Link from "next/link";
import { Service } from "@/features/services/model/types";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  isLoading: boolean;
  error: string | null;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  isOpen,
  onClose,
  services,
  isLoading,
  error,
  dropdownRef,
}) => {
  if (!isOpen) return null;

  const renderContent = () => {
    if (error) {
      return (
        <div className="p-4 text-center">
          <div className="text-black-600 mb-2 text-sm">
            Ошибка загрузки услуг
          </div>
          <button
            onClick={() => window.location.reload()}
            className="text-black-600 text-xs underline hover:text-gray-800"
          >
            Попробовать снова
          </button>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="p-4 text-center text-sm text-gray-500">Загрузка...</div>
      );
    }

    if (services.length === 0) {
      return (
        <div className="p-4 text-center text-sm text-gray-500">
          Услуги не найдены
        </div>
      );
    }

    return services.map((service) => (
      <Link
        key={service._id}
        href={`/services/${service.slug}`}
        className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
        onClick={onClose}
      >
        <div className="font-medium">{service.title}</div>
      </Link>
    ));
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 w-80 rounded-lg border border-gray-200 bg-white shadow-lg"
    >
      <div className="p-2">{renderContent()}</div>
    </div>
  );
};
