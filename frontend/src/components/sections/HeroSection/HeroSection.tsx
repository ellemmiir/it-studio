"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover bg-center">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative ml-40 w-full max-w-5xl px-4 pt-30 sm:px-6 lg:px-8">
        {/* Первая строка заголовка - прижата к левому краю родительского контейнера */}
        <span className="mb-8 -ml-8 block text-5xl font-semibold text-gray-900 md:-ml-12 md:text-7xl lg:-ml-16 lg:text-8xl">
          Развиваем
        </span>

        {/* Контент прижатый к правому краю */}
        <div className="ml-40 max-w-5xl">
          {/* Вторая строка заголовка */}
          <h1 className="mb-10 text-5xl font-semibold tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
            <span className="block">Ваш бизнесс</span>
          </h1>

          {/* Описание */}
          <div className="mb-12">
            <p className="text-lg leading-8 tracking-tighter text-gray-600">
              Мы - веб-разработчики для производственных и торговых компаний.
              Наши услуги включают аналитику, проектирование интерфейсов,
              разработку дизайна, программирование, интеграции, поддержку и
              развитие цифровых продуктов.
            </p>
          </div>

          {/* CTA Button */}
          {/* <a
            href="#"
            className="group animate-float inline-flex items-center justify-center rounded-full bg-indigo-600 px-12 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl"
          >
            Create an account
            <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a> */}
          <a
            href="#"
            className="group animate-float inline-flex items-center justify-center py-5 text-lg font-semibold text-black"
          >
            Рассчитать стоимость
            <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33398 10.0002L13.4081 10.0002M10.2599 13.778L13.5925 10.4454C13.8023 10.2355 13.9073 10.1306 13.9073 10.0002C13.9073 9.86979 13.8023 9.76485 13.5925 9.55497L10.2599 6.22241"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSection;
