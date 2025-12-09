"use client";

import Link from "next/link";
import { useState } from "react";
import { useServices, useDropdown } from "./Header.hooks";
import { NAV_LINKS } from "./Header.constants";
import { ServicesDropdown } from "./Header.components/ServicesDropdown";
import { MobileServicesMenu } from "./Header.components/MobileServicesMenu";
import { MobileMenuButton } from "./Header.components/MobileMenuButton";
import { NavLink } from "./Header.components/NavLink";
import type { NavLinkType } from "./Header.types";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { services, isLoading, error } = useServices();
  const dropdown = useDropdown();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    dropdown.closeDropdown();
  };

  const isServicesLink = (link: NavLinkType): boolean => {
    return link.href === "/services";
  };

  return (
    <header className="absolute top-0 z-50 w-full" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Лого */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="IT Studio - Главная страница"
          >
            <span className="text-2xl font-bold text-neutral-900">
              IT Studio
            </span>
          </Link>

          {/* Десктопная навигация */}
          <nav
            className="hidden items-center space-x-20 md:flex"
            aria-label="Основная навигация"
          >
            {NAV_LINKS.map((link: NavLinkType) => (
              <NavLink
                key={link.href}
                link={link}
                isServicesDropdownOpen={dropdown.isOpen}
                onMouseEnter={dropdown.openDropdown}
                onMouseLeave={dropdown.closeDropdown}
              >
                {isServicesLink(link) && (
                  <ServicesDropdown
                    isOpen={dropdown.isOpen}
                    onClose={dropdown.closeDropdown}
                    services={services}
                    isLoading={isLoading}
                    error={error}
                    dropdownRef={dropdown.dropdownRef}
                  />
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center">
            <Link href="/contacts" className="btn" aria-label="Оставить заявку">
              Оставить заявку
            </Link>

            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            />
          </div>
        </div>

        {/* Мобильное меню  */}
        {/* <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
            {NAV_LINKS.map((link: NavLinkType) => (
              <div key={link.href}>
                {isServicesLink(link) ? (
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
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-3 py-2" role="menuitem">
              <button
                className="btn"
                aria-label="Оставить заявку из мобильного меню"
                onClick={() => {
                  console.log("Заявка открыта из мобильного меню");
                  closeMobileMenu();
                }}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}
