"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { useActiveServices } from "@/features/services/model/hooks"; // Измененный импорт

const ContactPage = () => {
  // Используем хук из новой структуры
  const { data: services, loading: servicesLoading } = useActiveServices();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    problem: "",
    source: "",
    agree: false,
  });

  const referralSources = [
    "Поиск в Google/Yandex",
    "Реклама в соцсетях",
    "Рекомендация друзей/коллег",
    "Блог/статья",
    "Социальные сети",
    "Другое",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Пожалуйста, согласитесь с политикой конфиденциальности");
      return;
    }

    setIsSubmitting(true);

    // Создаем FormData для отправки файлов
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value.toString());
    });

    uploadedFiles.forEach((file) => {
      formDataToSend.append("files", file);
    });

    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form data:", Object.fromEntries(formDataToSend));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Сброс формы через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        problem: "",
        source: "",
        agree: false,
      });
      setUploadedFiles([]);
    }, 5000);
  };

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        {/* Заголовок страницы */}
        <div className="mb-16">
          <h1 className="text-title mb-6 text-6xl font-bold">Контакты</h1>
        </div>

        {/* Основной блок с двумя колонками */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Левая колонка - Текст и контакты */}
          <div>
            <div className="mb-10">
              <h2 className="text-title mb-6 text-4xl font-bold">
                Свяжитесь любым удобным способом
              </h2>
              <div className="space-y-4">
                <p className="text-grey-800 text-lg">
                  Оставьте заявку, перезвоним в рабочее время с 9:00 до 19:00
                </p>
                <p className="text-grey-600">
                  Отправка заявки вас ни к чему не обязывает. Созвонимся,
                  проведём консультацию, финальное решение — за вами.
                </p>
              </div>
            </div>

            {/* Контактная информация */}
            <div className="mb-10">
              <h3 className="mb-6 text-2xl font-bold">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-gray-900">Телефон</h4>
                    <a
                      href="tel:+78001234567"
                      className="hover:text-accent-600 text-xl font-semibold transition-colors"
                    >
                      +7 (800) 123-45-67
                    </a>
                    <p className="mt-1 text-sm text-gray-500">
                      Рабочие часы: 9:00 - 19:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-gray-900">Email</h4>
                    <a
                      href="mailto:info@itstudio.ru"
                      className="hover:text-accent-600 text-xl font-semibold transition-colors"
                    >
                      info@itstudio.ru
                    </a>
                    <p className="mt-1 text-sm text-gray-500">
                      Отвечаем в течение дня
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.13 11.358L12.178 3.88a1.5 1.5 0 00-2.356.886L8.5 10h-6a1.5 1.5 0 00-.975 2.642l8.952 7.478a1.5 1.5 0 002.356-.886L15.5 14h6a1.5 1.5 0 00.975-2.642z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-gray-900">Адрес</h4>
                    <p className="text-xl font-semibold">
                      г. Москва, ул. Примерная, д. 1
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Офис открыт для встреч по записи
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="border-grey-300 rounded-xl border p-6">
              <h4 className="mb-4 text-lg font-semibold">
                Что мы делаем после заявки?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mt-1 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                    1
                  </span>
                  <span className="text-gray-600">
                    Свяжемся в течение 15 минут
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                    2
                  </span>
                  <span className="text-gray-600">
                    Проведем бесплатную консультацию
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                    3
                  </span>
                  <span className="text-gray-600">
                    Составим подробное коммерческое предложение
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                    4
                  </span>
                  <span className="text-gray-600">
                    Начнем работу после утверждения всех деталей
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка - Форма */}
          <div>
            <div className="sticky top-6 rounded-xl bg-white p-8 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Заявка отправлена!
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Мы свяжемся с вами в течение 15 минут в рабочее время
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    Отправить еще одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-title mb-6 text-3xl font-bold">
                    Оставить заявку
                  </h3>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none"
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none"
                      placeholder="example@mail.ru"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Какая услуга интересует? *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none"
                    >
                      <option value="">Выберите услугу</option>
                      {servicesLoading ? (
                        <option disabled>Загрузка услуг...</option>
                      ) : (
                        services?.slice(0, 8).map((service) => (
                          <option key={service._id} value={service._id}>
                            {service.title}
                          </option>
                        ))
                      )}
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Откуда узнали о нас? *
                    </label>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none"
                    >
                      <option value="">Выберите вариант</option>
                      {referralSources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Опишите вашу задачу или проблему
                    </label>
                    <textarea
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none"
                      placeholder="Расскажите подробнее о том, что нужно сделать..."
                      rows={4}
                    />
                  </div>

                  {/* Блок с загрузкой файлов и вопросами */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Загрузка файлов (занимает 2/3 ширины) */}
                    <div className="lg:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Прикрепить файлы (ТЗ, дизайн, примеры)
                      </label>
                      <div className="rounded-lg border-2 border-dashed border-gray-300 p-4">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          multiple
                          className="hidden"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.rar"
                        />
                        <button
                          type="button"
                          onClick={triggerFileInput}
                          className="mb-4 flex w-full flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 py-6 transition-colors hover:bg-gray-100"
                        >
                          <svg
                            className="mb-2 h-10 w-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span className="text-gray-600">
                            Нажмите для загрузки файлов
                          </span>
                          <span className="mt-1 text-sm text-gray-500">
                            PDF, DOC, JPG, PNG, ZIP (до 10 МБ)
                          </span>
                        </button>

                        {uploadedFiles.length > 0 && (
                          <div className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between rounded bg-gray-50 px-3 py-2"
                              >
                                <div className="flex items-center">
                                  <svg
                                    className="mr-2 h-5 w-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                  <span className="truncate text-sm">
                                    {file.name}
                                  </span>
                                  <span className="ml-2 text-xs text-gray-500">
                                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-gray-400 hover:text-red-500"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Вопросы справа (занимает 1/3 ширины) */}
                    <div className="lg:col-span-1">
                      <div className="border-grey-300 rounded-lg border bg-gray-50 p-4">
                        <h4 className="mb-3 text-sm font-semibold text-gray-700">
                          Что можно написать в описании?
                        </h4>
                        <ul className="space-y-3">
                          <li className="text-xs text-gray-600">
                            <span className="font-medium">
                              Из какой вы компании?
                            </span>
                            <br />
                            <span className="text-gray-500">
                              Сфера, продукт, услуги
                            </span>
                          </li>
                          <li className="text-xs text-gray-600">
                            <span className="font-medium">
                              С чем нужна помощь?
                            </span>
                            <br />
                            <span className="text-gray-500">
                              Новый сайт, доработка, приложение
                            </span>
                          </li>
                          <li className="text-xs text-gray-600">
                            <span className="font-medium">
                              Какой результат нужен?
                            </span>
                            <br />
                            <span className="text-gray-500">
                              Конкретные цели и задачи
                            </span>
                          </li>
                          <li className="text-xs text-gray-600">
                            <span className="font-medium">Сроки и бюджет?</span>
                            <br />
                            <span className="text-gray-500">
                              Ориентировочные показатели
                            </span>
                          </li>
                          <li className="text-xs text-gray-600">
                            <span className="font-medium">
                              Мессенджер для связи?
                            </span>
                            <br />
                            <span className="text-gray-500">
                              Telegram, WhatsApp и т.д.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Согласие */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      required
                    />
                    <label
                      htmlFor="agree"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Я соглашаюсь с{" "}
                      <a
                        href="/privacy-policy"
                        className="text-black underline hover:text-gray-700"
                      >
                        политикой конфиденциальности
                      </a>{" "}
                      и даю согласие на обработку персональных данных *
                    </label>
                  </div>

                  {/* Кнопка отправки */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="glow-button relative w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="mr-2 h-4 w-4 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Отправляем заявку...
                      </span>
                    ) : (
                      "Отправить заявку"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-button {
          width: 100%;
          height: 50px;
          border: none;
          outline: none;
          color: #fff;
          background: #111;
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 10px;
          transition: all 0.3s ease;
          font-weight: bold;
          font-size: 16px;
        }

        .glow-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }

        .glow-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .glow-button:hover:not(:disabled) {
          transform: scale(1.02);
        }

        .glow-button:before {
          content: "";
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
          );
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 400%;
          z-index: -1;
          filter: blur(8px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          animation: glowing 15s ease-in-out infinite;
          opacity: 0.8;
          border-radius: 10px;
          transition:
            opacity 0.5s ease,
            filter 0.5s ease;
        }

        .glow-button:hover:not(:disabled):before {
          opacity: 1;
          filter: blur(10px);
        }

        .glow-button:after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #111;
          left: 0;
          top: 0;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .glow-button:hover:not(:disabled):after {
          background: #222;
        }

        @keyframes glowing {
          0% {
            background-position: 0% 50%;
            filter: blur(8px);
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 200% 50%;
            filter: blur(10px);
          }
          75% {
            background-position: 300% 50%;
          }
          100% {
            background-position: 0% 50%;
            filter: blur(8px);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
