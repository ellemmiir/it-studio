"use client";
import React from "react";
import styles from "./StepsSection.module.css";

interface StepType {
  number: string;
  title: string;
  description: string;
  bgcolor: string;
}

interface PendulumProps {
  steps: StepType[];
}

export default function StepsSection() {
  const steps: StepType[] = [
    {
      number: "1",
      title: "Заявка и консультация",
      description:
        "Вы оставляете заявку на сайте или по телефону. Мы связываемся с вами для обсуждения проекта. Определяем примерные сроки и бюджет.",
      bgcolor: "bg-neutral-300",
    },
    {
      number: "2",
      title: "Анализ и план",
      description:
        "Проводим анализ ваших задач, определяем требования и цели. Составляем детальный план работ и техническое задание, которое согласовываем с вами.",
      bgcolor: "bg-neutral-400",
    },
    {
      number: "3",
      title: "Реализация",
      description:
        "Приступаем к выполнению работ согласно утвержденному плану. Воплощаем  концепцию в техническое решение. Информируем вас о прогрессе.",
      bgcolor: "bg-neutral-500",
    },
    {
      number: "4",
      title: "Тестирование",
      description:
        "Тестируем функционал и удобство использования. Проводим финальную настройку, устраняем возможные недочеты и готовим систему к запуску.",
      bgcolor: "bg-neutral-700",
    },
    {
      number: "5",
      title: "Запуск и поддержка",
      description:
        "Предоставляем готовое решение. Помогаем с запуском. Предлагаем варианты дальнейшей технической поддержки и развития системы.",
      bgcolor: "bg-neutral-900",
    },
  ];

  return (
    <section className="bg-grey-200 overflow-hidden px-4 py-20">
      <div className="mx-auto flex max-w-380 flex-col px-4 py-20">
        <div className="relative mb-30 flex justify-between">
          <h2 className="text-title mb-10 text-5xl font-bold">
            Процесс работы
          </h2>
          <Pendulum steps={steps} />
        </div>

        <div className="grid grid-cols-5 gap-10 text-center">
          {steps.map((step, index) => (
            <div key={index}>
              <h3 className="text-title mb-3 text-xl font-bold">
                {step.title}
              </h3>
              <p className="text-grey-800">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Pendulum = ({ steps }: PendulumProps) => {
  return (
    <div className="absolute -top-20 right-0 mr-20 flex h-[200px] items-end gap-8">
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;
        const lineClass = isFirst
          ? `${styles.line} ${styles.lineLeft}`
          : isLast
            ? `${styles.line} ${styles.lineRight}`
            : styles.line;
        const ballClass = isFirst
          ? `${styles.ball} ${styles.ballLeft}`
          : isLast
            ? `${styles.ball} ${styles.ballRight}`
            : styles.ball;

        return (
          <div key={index} className={styles.pendulumContainer}>
            <div className={`${lineClass} ${step.bgcolor}`}></div>
            <div className={`${ballClass} ${step.bgcolor}`}>{step.number}</div>
          </div>
        );
      })}
    </div>
  );
};
