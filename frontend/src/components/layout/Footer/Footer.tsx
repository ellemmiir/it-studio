"use client";

import Link from "next/link";
import { useActiveServices } from "@/features/services/model/hooks"; // Исправленный импорт

export default function Footer() {
  // Используем хук из новой структуры
  const { data: services, loading, error } = useActiveServices();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-380 px-4 py-16">
        {/* Верхняя часть футера */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-13">
          {/* Блок 1: Логотип и контакты */}
          <ContactBlock />

          {/* Блок 2: Навигация по сайту */}
          <NavigationBlock />

          {/* Блок 3: Услуги */}
          <ServicesBlock
            services={services || []}
            loading={loading}
            error={error}
          />

          {/* Блок 4: Юридическая информация */}
          <LegalBlock />
        </div>

        <div className="border-grey-800 my-8 border-t" />

        {/* Нижняя часть футера */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          {/* Правовые документы */}
          <DocumentsBlock />

          {/* Социальные сети */}
          <SocialBlock />
        </div>

        {/* Копирайт */}
        <CopyrightBlock currentYear={currentYear} />
      </div>
    </footer>
  );
}

// ============ Блоки футера ============

function ContactBlock() {
  return (
    <div className="md:col-span-3">
      <Link
        href="/"
        className="mb-6 inline-block"
        aria-label="IT Studio - Главная страница"
      >
        <span className="text-2xl font-bold text-white">IT Studio</span>
      </Link>

      <div className="space-y-4">
        <ContactItem
          label="Телефон"
          value="+7 (900) 123-45-67"
          href="tel:+79001234567"
          ariaLabel="Позвонить по номеру +7 (900) 123-45-67"
        />

        <ContactItem
          label="Email"
          value="example@itstudio.ru"
          href="mailto:example@itstudio.ru"
          ariaLabel="Написать письмо на example@itstudio.ru"
        />

        <ContactItem
          label="Телеграм"
          value="@itstudio_official"
          href="https://t.me/itstudio_official"
          isExternal
          ariaLabel="Написать в телеграм @itstudio_official"
        />
      </div>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
  isExternal = false,
  ariaLabel,
}: {
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
  ariaLabel: string;
}) {
  return (
    <div>
      <p className="text-grey-600 text-sm font-medium">{label}</p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className="hover:text-accent-600 block text-lg font-semibold transition-colors"
      >
        {value}
      </a>
    </div>
  );
}

function NavigationBlock() {
  const navLinks = [
    { href: "/about", label: "О нас" },
    { href: "/projects", label: "Проекты" },
    { href: "/blog", label: "Блог" },
    { href: "/contacts", label: "Контакты" },
  ];

  return (
    <div className="md:col-span-3">
      <h3 className="mb-6 text-xl font-bold">Навигация</h3>
      <ul className="space-y-3">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-grey-400 hover:text-grey-100 block transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesBlock({
  services,
  loading,
  error,
}: {
  services?: any[];
  loading: boolean;
  error: string | null;
}) {
  return (
    <div className="md:col-span-4">
      <h3 className="mb-6 text-xl font-bold">Услуги</h3>

      {loading ? (
        <ServicesSkeleton />
      ) : error ? (
        <ServicesError error={error} />
      ) : services && services.length > 0 ? (
        <ServicesList services={services.slice(0, 8)} />
      ) : (
        <ServicesEmpty />
      )}
    </div>
  );
}

function ServicesSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-4 w-3/4 animate-pulse rounded bg-gray-700" />
      ))}
    </div>
  );
}

function ServicesError({ error }: { error: string }) {
  return (
    <div className="text-gray-400">
      <p>Не удалось загрузить услуги</p>
      <p className="text-sm text-gray-500">{error}</p>
    </div>
  );
}

function ServicesList({ services }: { services: any[] }) {
  return (
    <ul className="space-y-3">
      {services.map((service) => (
        <li key={service._id}>
          <Link
            href={`/services/${service.slug}`}
            className="text-grey-400 hover:text-grey-100 block transition-colors"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ServicesEmpty() {
  return <p className="text-gray-400">Услуги временно недоступны</p>;
}

function LegalBlock() {
  const legalInfo = [
    { label: "Адрес", value: "123456, г. Москва, ул. Примерная, д. 1" },
    { label: "ИНН", value: "1234567890" },
    { label: "ОГРН", value: "1234567890123" },
  ];

  return (
    <div className="md:col-span-3">
      <h3 className="mb-6 text-xl font-bold">Юридическая информация</h3>
      <div className="space-y-4">
        {legalInfo.map((item) => (
          <div key={item.label}>
            <p className="text-grey-600 text-sm font-medium">{item.label}</p>
            <p className="text-grey-400">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentsBlock() {
  const documents = [
    { href: "/privacy-policy", label: "Политика конфиденциальности" },
    {
      href: "/personal-data",
      label: "Согласие на обработку персональных данных",
    },
  ];

  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
        Правовые документы
      </h4>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {documents.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            className="block text-sm text-gray-300 transition-colors hover:text-white"
          >
            {doc.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialBlock() {
  const socialLinks = [
    {
      href: "https://t.me/itstudio_official",
      label: "Telegram",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.1.03-1.79 1.14-5.06 3.35-.48.33-.92.49-1.31.48-.43-.01-1.27-.24-1.89-.44-.76-.24-1.36-.37-1.3-.78.03-.2.32-.41.89-.62 3.47-1.49 5.78-2.47 6.94-2.95 3.16-1.32 3.82-1.55 4.25-1.55.09 0 .3.02.43.13.11.09.14.21.15.33.01.1.01.31.01.5z" />
        </svg>
      ),
    },
    {
      href: "https://vk.com/itstudio",
      label: "VK",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14c0 5.6 1.33 6.93 6.93 6.93h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m3.77 14.14c-.39.56-1.12.67-1.67.45-1.45-.56-2.23-1.12-3.17-2.23-.56.67-1.12 1.23-1.78 1.73-.45.34-.9.51-1.23.51-.34 0-.56-.11-.73-.34-.17-.23-.22-.56-.22-1.01V11.6c0-.78.11-1.34.34-1.67.23-.34.56-.51 1.01-.51.28 0 .56.06.84.17.28.11.56.28.84.51.28.23.56.51.84.84.28.34.56.73.84 1.23v-1.23c0-.56.11-1.01.34-1.34.23-.34.56-.51 1.01-.51.22 0 .39.06.56.17.17.11.28.28.39.45.11.17.17.39.17.67v2.91c0 .56.06 1.01.17 1.34.11.34.34.56.73.73.39.17.84.22 1.45.22.34 0 .67-.06 1.01-.17.34-.11.67-.28 1.01-.45.23-.17.45-.34.67-.45.22-.11.45-.17.67-.17.23 0 .39.06.56.17.17.11.28.28.39.45.11.17.17.39.17.67 0 .45-.17.84-.51 1.23z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="lg:text-right">
      <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
        Мы в соцсетях
      </h4>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

function CopyrightBlock({ currentYear }: { currentYear: number }) {
  return (
    <div className="border-grey-800 mt-12 border-t pt-8">
      <div className="text-center">
        <p className="text-sm text-gray-400">
          © {currentYear} IT Studio. Все права защищены.
        </p>
      </div>
    </div>
  );
}
