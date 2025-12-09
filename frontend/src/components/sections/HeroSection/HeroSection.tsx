"use client";

import React from "react";
import Link from "next/link";
import { useTypewriter } from "./HeroSection.hooks";
import styles from "./HeroSection.module.css"; //

const HeroSection = () => {
  const TEXTS = [
    "Развиваем ваш бизнес",
    "Создаем веб-сайты",
    "Проводим аудит",
    "Интегрируем готовые ИИ-решения",
    "Здесь любой текст, который нам нужен!",
  ];

  const displayText = useTypewriter(TEXTS, 150);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white">
      <div className="relative z-10 mt-auto mb-45 w-full px-4 text-center">
        <div className="mx-auto mb-10 max-w-5xl">
          <div className="relative flex min-h-[84px] items-center justify-center">
            <TypewriterDisplay text={displayText} />
          </div>
        </div>

        <div className="mx-auto mb-15 max-w-5xl">
          <p className="text-grey-800 text-lg">
            Создаем цифровые решения для бизнеса в Луганске и других городах
            России. Наши услуги включают разработку веб-сайтов, аудит и
            поддержку ИТ-инфраструктуры, внедрение ИИ-решений и Dev-Ops практик,
            установку IP-телефонии и систем видеонаблюдения и многое другое.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <ScrollButton onClick={scrollToServices} />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

// Вспомогательные компоненты (остаются в том же файле)
const TypewriterDisplay = ({ text }: { text: string }) => (
  <div className="relative inline-block text-center">
    <h1 className="text-title text-5xl font-semibold md:text-6xl lg:text-7xl">
      <span className="inline whitespace-pre-wrap">{text || "\u00A0"}</span>
      {/* Используем стиль из CSS модуля */}
      <span className={styles.cursor} />
    </h1>
  </div>
);

const ScrollButton = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Link href="#services" onClick={onClick} className="group accent-btn accent">
    Рассчитать стоимость
    <svg
      className="ml-3 transition-transform group-hover:translate-x-1"
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
  </Link>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    {/* Используем стиль из CSS модуля */}
    <div className={styles.floating}>
      <svg
        className="h-10 w-10 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10L12 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14L16 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

export default HeroSection;
