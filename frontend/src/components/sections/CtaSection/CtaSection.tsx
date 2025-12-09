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
import Link from "next/link";
import React from "react";

const CtaSection = () => {
  return (
    // {/* CTA секция */}
    <div className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4">
        <section className="bg-grey-200 rounded-2xl p-12">
          <div className="text-center">
            <h2 className="text-title mb-6 text-4xl font-bold">
              Готовы начать проект?
            </h2>
            <p className="text-grey-800 mx-auto mb-10 max-w-2xl text-xl">
              Обсудим ваши задачи и предложим оптимальное решение
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contacts" className="accent-btn accent">
                Обсудить проект
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CtaSection;
