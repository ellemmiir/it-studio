import { NavLinkType } from "./Header.types";

export const NAV_LINKS: readonly NavLinkType[] = [
  { href: "/about", label: "О нас" },
  { href: "/services", label: "Услуги" },
  { href: "/projects", label: "Проекты" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Контакты" },
] as const;
