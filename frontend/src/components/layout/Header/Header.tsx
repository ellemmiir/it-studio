"use client";

import Link from "next/link";
import { useState } from "react";
import { useServices, useDropdown } from "./Header.hooks";
import { NAV_LINKS } from "./Header.constants";
import { ServicesDropdown } from "./Header.components/ServicesDropdown";
import { MobileServicesMenu } from "./Header.components/MobileServicesMenu";
import { MobileMenuButton } from "./Header.components/MobileMenuButton";
import { NavLink } from "./Header.components/NavLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { services, isLoading, error } = useServices();
  const dropdown = useDropdown();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    dropdown.closeDropdown();
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Лого */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">IT Studio</span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden items-center space-x-20 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                link={link}
                isServicesDropdownOpen={dropdown.isOpen}
                onMouseEnter={dropdown.openDropdown}
                onMouseLeave={dropdown.closeDropdown}
              >
                <ServicesDropdown
                  isOpen={dropdown.isOpen}
                  onClose={dropdown.closeDropdown}
                  services={services}
                  isLoading={isLoading}
                  error={error}
                  dropdownRef={dropdown.dropdownRef}
                />
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center">
            <button className="ring-offset-background focus-visible:ring-ring hidden h-10 w-full cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-black px-4 py-2 text-sm font-medium text-white transition-all hover:border-black hover:bg-transparent hover:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:inline-flex">
              Оставить заявку
            </button>

            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.href === "/services" ? (
                    <MobileServicesMenu
                      isOpen={dropdown.isOpen}
                      onToggle={dropdown.toggleDropdown}
                      onClose={closeMobileMenu}
                      services={services}
                      isLoading={isLoading}
                      error={error}
                    />
                  ) : (
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <button className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
