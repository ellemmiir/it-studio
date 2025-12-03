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

import React from "react";

const CtaSection = () => {
  return (
    <section className="min-h-100 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl lg:max-w-screen">
        <div className="bg-grey-200 overflow-hidden rounded-2xl lg:rounded-3xl">
          <div className="px-6 py-12">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Заголовок с ограниченной шириной */}
              <div className="mb-4 max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                  Остались вопросы? Напишите нам! Отвечаем почти сразу.
                </h2>
              </div>

              {/* Описание с ограниченной шириной */}
              <div className="mb-10 max-w-xl">
                <p className="text-lg text-gray-600 sm:text-xl"></p>
              </div>

              {/* Кнопка для получения диагностики */}
              {/* <div className="mt-10">
                <button className="inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-black px-8 py-3 text-sm font-medium whitespace-nowrap text-white transition-all hover:border-black hover:bg-transparent hover:text-black focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Получить бесплатную диагностику
                </button>
              </div> */}
              <>
                <button className="glow-button" type="button">
                  Получить бесплатную диагностику
                </button>

                <style jsx>{`
                  .glow-button {
                    width: 350px;
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

                  .glow-button:active {
                    color: #000;
                    transform: scale(0.98);
                  }

                  .glow-button:hover {
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

                  .glow-button:hover:before {
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

                  .glow-button:hover:after {
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
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
