"use client";

import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

type SiteType =
  | "landing"
  | "visiting-card"
  | "corporate"
  | "ecommerce"
  | "multiple";
type Availability = "yes" | "no";
type Functionality = "basic" | "advanced";
type Urgency = "standard" | "urgent";

interface CalculatorState {
  step: number;
  siteType: SiteType | null;
  hasDesign: Availability | null;
  hasSpecs: Availability | null;
  pageCount: number;
  functionality: Functionality | null;
  needsResponsive: Availability | null;
  urgency: Urgency | null;
  hasPromotion: boolean;
  promotionDiscount: number;
}

// Функция округления до сотен
const roundToHundreds = (num: number): number => {
  return Math.round(num / 100) * 100;
};

// Функция форматирования числа с пробелами и округлением
const formatPrice = (num: number): string => {
  const rounded = roundToHundreds(num);
  return rounded.toLocaleString("ru-RU");
};

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<CalculatorState>({
    step: 1,
    siteType: null,
    hasDesign: null,
    hasSpecs: null,
    pageCount: 5,
    functionality: null,
    needsResponsive: null,
    urgency: null,
    hasPromotion: false,
    promotionDiscount: 10,
  });

  // Функция валидации шага
  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return state.siteType !== null;
      case 2:
        return state.hasDesign !== null && state.hasSpecs !== null;
      case 3:
        return state.functionality !== null && state.needsResponsive !== null;
      case 4:
        return state.urgency !== null;
      default:
        return true;
    }
  };

  // Функции расчета
  const calculatePrice = () => {
    if (!state.siteType) return { min: 0, max: 0, base: 0 };

    let basePrice = 0;

    // Базовая цена по типу
    switch (state.siteType) {
      case "landing":
        basePrice = 55000;
        break;
      case "visiting-card":
        basePrice = 105000;
        break;
      case "corporate":
        basePrice = 260000;
        break;
      case "ecommerce":
        basePrice = 500000;
        break;
      case "multiple":
        basePrice = 300000;
        break;
      default:
        basePrice = 0;
    }

    // Корректировка по количеству страниц (только для определенных типов)
    if (
      state.siteType &&
      ["visiting-card", "corporate"].includes(state.siteType)
    ) {
      basePrice += Math.max(0, state.pageCount - 5) * 5000;
    }

    // Применение коэффициентов
    let multiplier = 1;

    if (state.hasDesign === "no") multiplier *= 1.35;
    if (state.hasSpecs === "no") multiplier *= 1.25;
    if (state.functionality === "advanced") multiplier *= 1.4;
    if (state.needsResponsive === "no") multiplier *= 0.85;
    if (state.urgency === "urgent") multiplier *= 1.3;
    if (state.hasPromotion) multiplier *= 1 - state.promotionDiscount / 100;

    const finalPrice = basePrice * multiplier;

    // Диапазон ±15% с округлением до сотен
    const minPrice = finalPrice * 0.85;
    const maxPrice = finalPrice * 1.15;
    const basePriceRounded = finalPrice;

    return {
      min: roundToHundreds(minPrice),
      max: roundToHundreds(maxPrice),
      base: roundToHundreds(basePriceRounded),
      minRaw: minPrice,
      maxRaw: maxPrice,
      baseRaw: basePriceRounded,
    };
  };

  const steps = [
    { id: 1, title: "Тип сайта" },
    { id: 2, title: "Документация" },
    { id: 3, title: "Страницы и функции" },
    { id: 4, title: "Дополнительно" },
    { id: 5, title: "Результат" },
  ];

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Выберите тип сайта</h3>
            {[
              {
                value: "landing",
                label: "Лендинг",
                desc: "Одностраничный сайт для продажи продукта/услуги",
                price: "30-80 тыс. ₽",
              },
              {
                value: "visiting-card",
                label: "Сайт-визитка",
                desc: "Небольшой сайт на 3-5 страниц",
                price: "60-150 тыс. ₽",
              },
              {
                value: "corporate",
                label: "Корпоративный сайт",
                desc: "Многостраничный сайт для компании",
                price: "120-400 тыс. ₽",
              },
              {
                value: "ecommerce",
                label: "Интернет-магазин",
                desc: "Полноценный магазин с корзиной и оплатой",
                price: "200-800 тыс. ₽",
              },
              {
                value: "multiple",
                label: "Несколько сайтов",
                desc: "Пакет сайтов или сложный проект",
                price: "Индивидуально",
              },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setState({ ...state, siteType: option.value as SiteType });
                  setTimeout(() => setState((s) => ({ ...s, step: 2 })), 300);
                }}
                className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                  state.siteType === option.value
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{option.label}</h4>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                  <span className="font-semibold text-purple-700">
                    {option.price}
                  </span>
                </div>
              </button>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Документация и дизайн</h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">
                  Есть ли у вас готовое техническое задание?
                </h4>
                <div className="flex gap-2">
                  {["yes", "no"].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setState({ ...state, hasSpecs: option as Availability })
                      }
                      className={`flex-1 rounded-lg border py-3 ${
                        state.hasSpecs === option
                          ? "border-purple-600 bg-purple-50 text-purple-700"
                          : "border-gray-300"
                      }`}
                    >
                      {option === "yes" ? "Да, есть" : "Нет, нужно разработать"}
                    </button>
                  ))}
                </div>
                {state.hasSpecs === "no" && (
                  <p className="mt-2 text-sm text-gray-600">
                    Разработка ТЗ добавит +25% к стоимости
                  </p>
                )}
              </div>

              <div>
                <h4 className="mb-2 font-medium">
                  Есть ли у вас готовый дизайн?
                </h4>
                <div className="flex gap-2">
                  {["yes", "no"].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setState({
                          ...state,
                          hasDesign: option as Availability,
                        })
                      }
                      className={`flex-1 rounded-lg border py-3 ${
                        state.hasDesign === option
                          ? "border-purple-600 bg-purple-50 text-purple-700"
                          : "border-gray-300"
                      }`}
                    >
                      {option === "yes" ? "Да, есть" : "Нет, нужен дизайн"}
                    </button>
                  ))}
                </div>
                {state.hasDesign === "no" && (
                  <p className="mt-2 text-sm text-gray-600">
                    Разработка дизайна добавит +35% к стоимости
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Детали проекта</h3>

            {state.siteType &&
              ["visiting-card", "corporate"].includes(state.siteType) && (
                <div>
                  <h4 className="mb-2 font-medium">
                    Количество страниц: {state.pageCount}
                  </h4>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={state.pageCount}
                    onChange={(e) =>
                      setState({
                        ...state,
                        pageCount: parseInt(e.target.value),
                      })
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                  />
                  <div className="mt-1 flex justify-between text-sm text-gray-500">
                    <span>1 страница</span>
                    <span>20+ страниц</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Каждая дополнительная страница: +5 000 ₽
                  </p>
                </div>
              )}

            <div>
              <h4 className="mb-2 font-medium">Функционал сайта</h4>
              <div className="flex gap-2">
                {[
                  {
                    value: "basic",
                    label: "Базовый",
                    desc: "Меню, формы, блог",
                  },
                  {
                    value: "advanced",
                    label: "Расширенный",
                    desc: "Корзина, оплата, интеграции",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setState({
                        ...state,
                        functionality: option.value as Functionality,
                      })
                    }
                    className={`flex-1 rounded-lg border px-4 py-3 text-left ${
                      state.functionality === option.value
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.desc}</div>
                  </button>
                ))}
              </div>
              {state.functionality === "advanced" && (
                <p className="mt-2 text-sm text-gray-600">
                  Расширенный функционал добавит +40% к стоимости
                </p>
              )}
            </div>

            <div>
              <h4 className="mb-2 font-medium">Нужна ли адаптивная верстка?</h4>
              <div className="flex gap-2">
                {["yes", "no"].map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setState({
                        ...state,
                        needsResponsive: option as Availability,
                      })
                    }
                    className={`flex-1 rounded-lg border py-3 ${
                      state.needsResponsive === option
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-300"
                    }`}
                  >
                    {option === "yes" ? "Да, нужна" : "Нет, не нужна"}
                  </button>
                ))}
              </div>
              {state.needsResponsive === "no" && (
                <p className="mt-2 text-sm text-gray-600">
                  Без адаптивной верстки: -15% к стоимости
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Дополнительные параметры</h3>

            <div>
              <h4 className="mb-2 font-medium">Сроки разработки</h4>
              <div className="flex gap-2">
                {[
                  {
                    value: "standard",
                    label: "Стандартные",
                    desc: "2-4 недели",
                  },
                  { value: "urgent", label: "Срочные", desc: "1-2 недели" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setState({ ...state, urgency: option.value as Urgency })
                    }
                    className={`flex-1 rounded-lg border px-4 py-3 text-left ${
                      state.urgency === option.value
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.desc}</div>
                  </button>
                ))}
              </div>
              {state.urgency === "urgent" && (
                <p className="mt-2 text-sm text-gray-600">
                  Срочная разработка добавит +30% к стоимости
                </p>
              )}
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-medium">Есть промокод или акция?</h4>
                <button
                  onClick={() =>
                    setState({ ...state, hasPromotion: !state.hasPromotion })
                  }
                  className={`rounded-full px-4 py-1 text-sm ${
                    state.hasPromotion
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {state.hasPromotion ? "Да" : "Нет"}
                </button>
              </div>

              {state.hasPromotion && (
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium">
                    Размер скидки (%)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="5"
                      value={state.promotionDiscount}
                      onChange={(e) =>
                        setState({
                          ...state,
                          promotionDiscount: parseInt(e.target.value),
                        })
                      }
                      className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-gray-200"
                    />
                    <span className="w-12 font-semibold text-purple-700">
                      {state.promotionDiscount}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 5:
        const price = calculatePrice();
        return (
          <div className="space-y-6">
            <div className="rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Примерная стоимость
              </h3>
              <div className="my-4">
                <div className="text-4xl font-bold text-purple-700">
                  {formatPrice(price.min)} - {formatPrice(price.max)} ₽
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Без учета индивидуальных требований и скидок
                </p>
                <div className="mt-3 text-sm text-gray-500">
                  <p>Цены округлены до сотен рублей</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Что включено в расчет:</h4>
              <ul className="space-y-2 text-gray-700">
                {state.siteType && (
                  <li>
                    • Тип:{" "}
                    {state.siteType === "landing"
                      ? "Лендинг"
                      : state.siteType === "visiting-card"
                        ? "Сайт-визитка"
                        : state.siteType === "corporate"
                          ? "Корпоративный сайт"
                          : state.siteType === "ecommerce"
                            ? "Интернет-магазин"
                            : "Несколько сайтов"}
                  </li>
                )}
                {state.hasDesign && (
                  <li>
                    • Дизайн:{" "}
                    {state.hasDesign === "yes" ? "готовый" : "разработка"}
                  </li>
                )}
                {state.hasSpecs && (
                  <li>
                    • ТЗ: {state.hasSpecs === "yes" ? "готовое" : "разработка"}
                  </li>
                )}
                {state.pageCount > 1 &&
                  state.siteType &&
                  ["visiting-card", "corporate"].includes(state.siteType) && (
                    <li>• Страниц: {state.pageCount}</li>
                  )}
                {state.functionality && (
                  <li>
                    • Функционал:{" "}
                    {state.functionality === "basic"
                      ? "базовый"
                      : "расширенный"}
                  </li>
                )}
                {state.needsResponsive && (
                  <li>
                    • Адаптив:{" "}
                    {state.needsResponsive === "yes" ? "нужен" : "не нужен"}
                  </li>
                )}
                {state.urgency && (
                  <li>
                    • Сроки:{" "}
                    {state.urgency === "standard" ? "стандартные" : "срочные"}
                  </li>
                )}
                {state.hasPromotion && (
                  <li>• Скидка: {state.promotionDiscount}%</li>
                )}
              </ul>
            </div>

            <CTAForm />
          </div>
        );

      default:
        return null;
    }
  };

  // Компонент CTA формы
  const CTAForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      comment: "",
      files: [] as File[],
    });

    return (
      <div className="border-t pt-6">
        <h4 className="mb-4 font-semibold">
          Оставьте контакты для точного расчета
        </h4>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Имя"
            className="w-full rounded-lg border p-3"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-lg border p-3"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            placeholder="Дополнительные требования или описание проекта"
            className="w-full rounded-lg border p-3"
            rows={3}
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
          <div>
            <label className="mb-2 block text-sm font-medium">
              Прикрепить файлы (ТЗ, дизайн)
            </label>
            <input
              type="file"
              multiple
              className="w-full rounded-lg border p-2"
              onChange={(e) => {
                if (e.target.files) {
                  setFormData({
                    ...formData,
                    files: Array.from(e.target.files),
                  });
                }
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700"
          >
            Получить точный расчет
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {/* Кнопка на странице услуги */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-purple-700 hover:shadow-lg"
      >
        Рассчитать стоимость
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white">
            {/* Шапка */}
            <div className="sticky top-0 flex items-center justify-between border-b bg-white px-6 py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    state.step > 1 &&
                    setState({ ...state, step: state.step - 1 })
                  }
                  className={`rounded-full p-2 hover:bg-gray-100 ${state.step > 1 ? "text-gray-700" : "cursor-default text-gray-300"}`}
                  disabled={state.step <= 1}
                >
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <h2 className="text-lg font-semibold">Калькулятор сайта</h2>
                  <div className="mt-1 flex gap-2">
                    {steps.map((step) => (
                      <div
                        key={step.id}
                        className={`h-1 w-8 rounded-full transition-all ${
                          step.id <= state.step
                            ? "bg-purple-600"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Контент */}
            <div className="p-6">
              {renderStep()}

              {/* Навигация */}
              {state.step < 5 && (
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() =>
                      state.step > 1 &&
                      setState({ ...state, step: state.step - 1 })
                    }
                    className={`rounded-lg px-6 py-2 transition-colors ${
                      state.step > 1
                        ? "border border-gray-300 hover:bg-gray-50"
                        : "invisible"
                    }`}
                    disabled={state.step <= 1}
                  >
                    Назад
                  </button>
                  <button
                    onClick={() => {
                      // Проверка заполнения текущего шага
                      if (validateStep(state.step)) {
                        setState({ ...state, step: state.step + 1 });
                      }
                    }}
                    className="rounded-lg bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={!validateStep(state.step)}
                  >
                    {state.step === 4 ? "Рассчитать" : "Далее"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;
