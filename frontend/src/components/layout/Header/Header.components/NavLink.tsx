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
  if (link.href === "/services") {
    return (
      <div
        className="relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex cursor-default items-center font-light text-black transition-colors hover:text-gray-500">
          {link.label}
          <svg
            className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
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
        </div>

        {children}
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className="font-light text-black transition-colors hover:text-gray-500"
    >
      {link.label}
    </Link>
  );
};
