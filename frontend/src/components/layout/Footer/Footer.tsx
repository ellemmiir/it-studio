"use client";

import Link from "next/link";
import { useServices } from "@/components/layout/Header/Header.hooks";

export default function Footer() {
  const { services, isLoading } = useServices();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-380 px-4 py-16">
        {/* Верхняя часть футера */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Блок 1: Логотип и контакты */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <span className="text-2xl font-bold text-white">IT Studio</span>
            </Link>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-400">Телефон</p>
                <a
                  href="tel:+78001234567"
                  className="hover:text-accent-400 text-lg font-semibold transition-colors"
                >
                  +7 (800) 123-45-67
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-400">Email</p>
                <a
                  href="mailto:info@itstudio.ru"
                  className="hover:text-accent-400 text-lg font-semibold transition-colors"
                >
                  info@itstudio.ru
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-400">Телеграм</p>
                <a
                  href="https://t.me/itstudio_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 text-lg font-semibold transition-colors"
                >
                  @itstudio_official
                </a>
              </div>
            </div>
          </div>

          {/* Блок 2: Навигация по сайту */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Блок 3: Услуги */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Услуги</h3>
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-3/4 animate-pulse rounded bg-gray-700"
                  />
                ))}
              </div>
            ) : services && services.length > 0 ? (
              <ul className="space-y-3">
                {services.slice(0, 8).map((service) => (
                  <li key={service._id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">Услуги временно недоступны</p>
            )}
          </div>

          {/* Блок 4: Юридическая информация */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Юридическая информация</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-400">Адрес</p>
                <p className="text-gray-300">
                  123456, г. Москва,
                  <br />
                  ул. Примерная, д. 1
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-400">ИНН</p>
                  <p className="text-gray-300">1234567890</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">ОГРН</p>
                  <p className="text-gray-300">1234567890123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className="my-8 border-t border-gray-800" />

        {/* Нижняя часть футера */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Правовые документы */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Правовые документы
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Пользовательское соглашение
              </Link>
              <Link
                href="/personal-data"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Согласие на обработку персональных данных
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Политика использования cookies
              </Link>
            </div>
          </div>

          {/* Кнопка обратной связи */}
          <div className="lg:text-center">
            <button className="ring-offset-background focus-visible:ring-ring mb-4 inline-flex h-12 cursor-pointer items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-gray-900 transition-all hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
              Оставить заявку
            </button>
            <p className="text-xs text-gray-500">Ответим в течение 15 минут</p>
          </div>

          {/* Социальные сети */}
          <div className="lg:text-right">
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Мы в соцсетях
            </h4>
            <div className="flex justify-end space-x-4 lg:justify-end">
              <a
                href="https://t.me/itstudio_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Telegram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.1.03-1.79 1.14-5.06 3.35-.48.33-.92.49-1.31.48-.43-.01-1.27-.24-1.89-.44-.76-.24-1.36-.37-1.3-.78.03-.2.32-.41.89-.62 3.47-1.49 5.78-2.47 6.94-2.95 3.16-1.32 3.82-1.55 4.25-1.55.09 0 .3.02.43.13.11.09.14.21.15.33.01.1.01.31.01.5z" />
                </svg>
              </a>
              <a
                href="https://vk.com/itstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="VK"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14c0 5.6 1.33 6.93 6.93 6.93h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m3.77 14.14c-.39.56-1.12.67-1.67.45-1.45-.56-2.23-1.12-3.17-2.23-.56.67-1.12 1.23-1.78 1.73-.45.34-.9.51-1.23.51-.34 0-.56-.11-.73-.34-.17-.23-.22-.56-.22-1.01V11.6c0-.78.11-1.34.34-1.67.23-.34.56-.51 1.01-.51.28 0 .56.06.84.17.28.11.56.28.84.51.28.23.56.51.84.84.28.34.56.73.84 1.23v-1.23c0-.56.11-1.01.34-1.34.23-.34.56-.51 1.01-.51.22 0 .39.06.56.17.17.11.28.28.39.45.11.17.17.39.17.67v2.91c0 .56.06 1.01.17 1.34.11.34.34.56.73.73.39.17.84.22 1.45.22.34 0 .67-.06 1.01-.17.34-.11.67-.28 1.01-.45.23-.17.45-.34.67-.45.22-.11.45-.17.67-.17.23 0 .39.06.56.17.17.11.28.28.39.45.11.17.17.39.17.67 0 .45-.17.84-.51 1.23z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} IT Studio. Все права защищены.
            </p>
            <p className="mt-4 text-xs text-gray-500 md:mt-0">
              Использование материалов сайта разрешено только с согласия
              правообладателя
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
