import { Service } from "@/features/services/model/types";

export type NavLinkType = {
  href: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  disabled?: boolean;
};

export type DropdownStateType = {
  isOpen: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

export type ServicesHookReturnType = {
  services: Service[];
  isLoading: boolean;
  error: string | null;
};

export type MobileMenuButtonProps = {
  isMenuOpen: boolean;
  onToggle: () => void;
  'aria-expanded': boolean;
  'aria-label': string;
};

export type NavLinkProps = {
  link: NavLinkType;
  isServicesDropdownOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children?: React.ReactNode;
};

export type ServicesDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  isLoading: boolean;
  error: string | null; 
  dropdownRef: React.RefObject<HTMLDivElement>;
};

export type MobileServicesMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  services: Service[];
  isLoading: boolean;
  error: Error | null;
};