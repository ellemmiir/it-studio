import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  link: {
    href: string;
    label: string;
  };
  isServicesDropdownOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({
  link,
  isServicesDropdownOpen,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  const isServicesLink = link.href === "/services";

  if (isServicesLink) {
    return (
      <div
        className="group relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          type="button"
          className="font-regular hover:text-grey-800 focus-visible:ring-opacity-50 focus-visible:ring-neutral flex items-center rounded px-2 py-1 text-black transition-colors focus-visible:ring-2 focus-visible:outline-none"
          aria-expanded={isServicesDropdownOpen}
          aria-haspopup="true"
          aria-controls="services-dropdown"
          aria-label={`${link.label}, нажмите чтобы ${isServicesDropdownOpen ? "скрыть" : "показать"} подменю`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!isServicesDropdownOpen) {
              onMouseEnter();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!isServicesDropdownOpen) {
                onMouseEnter();
              }
            }
            if (e.key === "Escape" && isServicesDropdownOpen) {
              e.preventDefault();
              onMouseLeave();
            }
            if (e.key === "ArrowDown" && !isServicesDropdownOpen) {
              e.preventDefault();
              onMouseEnter();
            }
          }}
        >
          {link.label}
          <svg
            className={`ml-2 h-4 w-4 transition-transform duration-200 ${
              isServicesDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          id="services-dropdown"
          role="menu"
          aria-label="Меню услуг"
          aria-orientation="vertical"
          aria-labelledby={`services-button-${link.label}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className="font-regular hover:text-grey-800 focus-visible:ring-opacity-50 focus-visible:ring-neutral rounded px-2 py-1 text-black transition-colors focus-visible:ring-2 focus-visible:outline-none"
      role="menuitem"
      aria-label={`Перейти на страницу: ${link.label}`}
      tabIndex={0}
    >
      {link.label}
    </Link>
  );
};
