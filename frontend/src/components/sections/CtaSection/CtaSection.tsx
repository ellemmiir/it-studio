// // components/QuestionsCTA.tsx
// import React from "react";
// import Link from "next/link";

// const CtaSection = () => {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Левая часть: Остались вопросы? */}
//           <div className="space-y-6">
//             <h2 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl">
//               Остались вопросы?
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
//               Напиши нам! Отвечаем почти сразу.
//             </p>

//             {/* Контактная информация */}
//             <div className="space-y-4 pt-4">
//               <div className="flex items-start space-x-3">
//                 <svg
//                   className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   ></path>
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   ></path>
//                 </svg>
//                 <div>
//                   <p className="text-gray-700">
//                     <span className="font-medium">Юридический адрес:</span>{" "}
//                     432044, г. Ульяновск, ул. Кольцевая, д.33
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <svg
//                   className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                   ></path>
//                 </svg>
//                 <div>
//                   <p className="text-gray-700">
//                     <span className="font-medium">ОГРН:</span> 1107328000341
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Документы */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <Link
//                 href="/privacy-policy"
//                 className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
//               >
//                 Политика конфиденциальности
//               </Link>
//               <Link
//                 href="/license"
//                 className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
//               >
//                 Образовательная лицензия
//               </Link>
//               <Link
//                 href="/requisites"
//                 className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
//               >
//                 Реквизиты
//               </Link>
//             </div>

//             <p className="pt-8 text-sm text-gray-500">
//               © PixelMap, 2023
//               <br />
//               Общество с ограниченной ответственностью «Интелси»
//             </p>
//           </div>

//           {/* Правая часть: Форма для бесплатной диагностики */}
//           <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
//             <div className="mb-8 text-center">
//               <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
//                 Получить бесплатную диагностику
//               </h3>
//               <p className="text-gray-600">
//                 Оставьте заявку и наш специалист свяжется с вами в течение 15
//                 минут
//               </p>
//             </div>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="mb-2 block text-sm font-medium text-gray-700"
//                 >
//                   Имя *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Введите ваше имя"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="mb-2 block text-sm font-medium text-gray-700"
//                 >
//                   Телефон *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="+7 (___) ___-__-__"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="example@mail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="question"
//                   className="mb-2 block text-sm font-medium text-gray-700"
//                 >
//                   Ваш вопрос или комментарий
//                 </label>
//                 <textarea
//                   id="question"
//                   name="question"
//                   rows={4}
//                   className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Опишите вашу проблему или вопрос..."
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   id="privacy"
//                   name="privacy"
//                   type="checkbox"
//                   required
//                   className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                 />
//                 <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
//                   Я соглашаюсь с{" "}
//                   <Link
//                     href="/privacy-policy"
//                     className="font-medium text-blue-600 hover:text-blue-800"
//                   >
//                     политикой конфиденциальности
//                   </Link>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
//               >
//                 Отправить заявку на диагностику
//               </button>

//               <p className="mt-4 text-center text-xs text-gray-500">
//                 Нажимая кнопку, вы подтверждаете согласие на обработку
//                 персональных данных
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CtaSection;

// components/QuestionsCTA.tsx
"use client";

import React, { useState } from "react";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "" });
    }, 3000);
  };

  return (
    <section className="min-h-100 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl lg:max-w-screen">
        <div className="bg-grey-200 overflow-hidden rounded-2xl lg:rounded-3xl">
          <div className="px-6 py-12 lg:px-12 lg:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Левая часть - Текст */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                    Остались вопросы? Напишите нам!
                  </h2>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      ✓
                    </div>
                    <p className="text-lg text-gray-600">
                      Отвечаем почти сразу в рабочее время
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      ✓
                    </div>
                    <p className="text-lg text-gray-600">
                      Бесплатная консультация и оценка проекта
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      ✓
                    </div>
                    <p className="text-lg text-gray-600">
                      Подберем оптимальное решение под ваш бюджет
                    </p>
                  </div>
                </div>

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
                      Отправляем...
                    </span>
                  ) : (
                    "Получить бесплатную диагностику"
                  )}
                </button>
              </div>

              {/* Правая часть - Форма */}
              {/* <div className="rounded-xl bg-white p-6 shadow-lg lg:p-8">
                {isSubmitted ? (
                  <div className="flex h-64 flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-8 w-8 text-green-600"
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
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Заявка отправлена!
                    </h3>
                    <p className="text-gray-600">
                      Мы свяжемся с вами в течение 15 минут
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="focus:ring-opacity-20 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:outline-none"
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Номер телефона
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="focus:ring-opacity-20 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:outline-none"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="focus:ring-opacity-20 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:outline-none"
                        placeholder="example@mail.ru"
                      />
                    </div>

                    <div className="pt-4">
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
                            Отправляем...
                          </span>
                        ) : (
                          "Получить бесплатную диагностику"
                        )}
                      </button>

                      <p className="mt-3 text-center text-sm text-gray-500">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a
                          href="/privacy-policy"
                          className="text-black underline hover:text-gray-700"
                        >
                          политикой конфиденциальности
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </div> */}
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
        }

        .glow-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }

        .glow-button:active:not(:disabled) {
          color: #000;
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
    </section>
  );
};

export default CtaSection;
