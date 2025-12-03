"use client";

import { useState } from "react";
import { X, ArrowLeft, Users, Phone, Shield, Cloud, Clock } from "lucide-react";

type ConnectionType = "cloud" | "hybrid" | "on-premise";
type CRMIntegration = "none" | "basic" | "advanced";
type SupportLevel = "basic" | "standard" | "premium";
type ContractPeriod = "monthly" | "quarterly" | "yearly";

interface CalculatorState {
  step: number;
  employees: number;
  phoneLines: number;
  connectionType: ConnectionType | null;
  crmIntegration: CRMIntegration | null;
  features: string[];
  supportLevel: SupportLevel | null;
  contractPeriod: ContractPeriod | null;
  needInstallation: boolean;
  needTraining: boolean;
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

const Calculator2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<CalculatorState>({
    step: 1,
    employees: 10,
    phoneLines: 8,
    connectionType: null,
    crmIntegration: null,
    features: [],
    supportLevel: null,
    contractPeriod: null,
    needInstallation: true,
    needTraining: true,
  });

  // Функция валидации шага
  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return true; // Всегда валидно
      case 2:
        return state.connectionType !== null;
      case 3:
        return state.crmIntegration !== null && state.supportLevel !== null;
      case 4:
        return state.contractPeriod !== null;
      default:
        return true;
    }
  };

  // Функция расчета стоимости
  const calculatePrice = () => {
    let monthlyPrice = 0;
    let oneTimeCost = 0;

    // Базовая стоимость по количеству сотрудников
    const employeeBase = state.employees * 450; // 450 руб/сотрудник в месяц
    const linesBase = state.phoneLines * 350; // 350 руб/линия в месяц

    monthlyPrice = employeeBase + linesBase;

    // Коэффициент типа подключения
    let connectionMultiplier = 1;
    switch (state.connectionType) {
      case "cloud":
        connectionMultiplier = 1.0;
        oneTimeCost += 15000; // Настройка облака
        break;
      case "hybrid":
        connectionMultiplier = 1.2;
        oneTimeCost += 35000; // Оборудование + настройка
        break;
      case "on-premise":
        connectionMultiplier = 1.5;
        oneTimeCost += 80000; // Серверное оборудование
        break;
    }
    monthlyPrice *= connectionMultiplier;

    // CRM интеграция
    if (state.crmIntegration === "basic") {
      monthlyPrice *= 1.15;
      oneTimeCost += 20000;
    } else if (state.crmIntegration === "advanced") {
      monthlyPrice *= 1.3;
      oneTimeCost += 40000;
    }

    // Дополнительные функции
    state.features.forEach((feature) => {
      switch (feature) {
        case "call-recording":
          monthlyPrice += state.employees * 100;
          break;
        case "video-conference":
          monthlyPrice += 5000;
          break;
        case "analytics":
          monthlyPrice += 3000;
          break;
        case "mobile-app":
          monthlyPrice += state.employees * 50;
          break;
        case "ivr":
          monthlyPrice += 2000;
          oneTimeCost += 10000;
          break;
      }
    });

    // Уровень поддержки
    switch (state.supportLevel) {
      case "standard":
        monthlyPrice *= 1.2;
        break;
      case "premium":
        monthlyPrice *= 1.4;
        break;
    }

    // Период контракта (скидки за длительный период)
    let periodMultiplier = 1;
    switch (state.contractPeriod) {
      case "quarterly":
        periodMultiplier = 0.95; // 5% скидка
        break;
      case "yearly":
        periodMultiplier = 0.85; // 15% скидка
        break;
    }

    // Дополнительные услуги
    if (state.needInstallation) {
      oneTimeCost += 20000;
    }
    if (state.needTraining) {
      oneTimeCost += 15000;
    }

    // Итоговые расчеты
    const monthlyFinal = monthlyPrice * periodMultiplier;
    const quarterlyFinal = monthlyFinal * 3;
    const yearlyFinal = monthlyFinal * 12;

    // Округление
    return {
      monthly: roundToHundreds(monthlyFinal),
      quarterly: roundToHundreds(quarterlyFinal),
      yearly: roundToHundreds(yearlyFinal),
      setup: roundToHundreds(oneTimeCost),
      monthlyRaw: monthlyFinal,
      quarterlyRaw: quarterlyFinal,
      yearlyRaw: yearlyFinal,
      setupRaw: oneTimeCost,
    };
  };

  const steps = [
    { id: 1, title: "Масштаб", icon: <Users size={18} /> },
    { id: 2, title: "Конфигурация", icon: <Phone size={18} /> },
    { id: 3, title: "Интеграции", icon: <Shield size={18} /> },
    { id: 4, title: "Обслуживание", icon: <Cloud size={18} /> },
    { id: 5, title: "Результат", icon: <Clock size={18} /> },
  ];

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Количество сотрудников</h3>
              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {state.employees}{" "}
                    {state.employees === 1
                      ? "сотрудник"
                      : state.employees < 5
                        ? "сотрудника"
                        : "сотрудников"}
                  </span>
                  <span className="text-gray-600">
                    ≈ {state.employees * 450} ₽/мес
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={state.employees}
                  onChange={(e) =>
                    setState({ ...state, employees: parseInt(e.target.value) })
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gradient-to-r from-blue-200 to-blue-400"
                />
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>1-5 (малый бизнес)</span>
                  <span>50-100 (средний бизнес)</span>
                  <span>100+ (крупный бизнес)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Количество телефонных линий
              </h3>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-lg font-semibold">
                  {state.phoneLines} линий
                </span>
                <span className="text-gray-600">
                  ≈ {state.phoneLines * 350} ₽/мес
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={state.phoneLines}
                onChange={(e) =>
                  setState({ ...state, phoneLines: parseInt(e.target.value) })
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gradient-to-r from-green-200 to-green-400"
              />
              <div className="mt-2 text-sm text-gray-600">
                Рекомендуем {Math.ceil(state.employees / 3)} линий для{" "}
                {state.employees} сотрудников
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Тип подключения</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  value: "cloud",
                  label: "Облачная телефония",
                  desc: "Полностью в облаке, без оборудования",
                  price: "от 450 ₽/сотр.",
                  features: [
                    "Быстрый запуск",
                    "Масштабируемость",
                    "Обновления автоматически",
                  ],
                },
                {
                  value: "hybrid",
                  label: "Гибридное решение",
                  desc: "Часть в облаке, часть на вашем оборудовании",
                  price: "от 650 ₽/сотр.",
                  features: ["Гибкость", "Контроль данных", "Резервирование"],
                },
                {
                  value: "on-premise",
                  label: "Локальная АТС",
                  desc: "Полностью на вашем оборудовании",
                  price: "от 850 ₽/сотр.",
                  features: [
                    "Полный контроль",
                    "Высокая безопасность",
                    "Одноразовые инвестиции",
                  ],
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setState({
                      ...state,
                      connectionType: option.value as ConnectionType,
                    })
                  }
                  className={`w-full rounded-xl border-2 p-5 text-left transition-all ${
                    state.connectionType === option.value
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold">{option.label}</h4>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <ul className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-500">
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="font-bold text-blue-700">
                      {option.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Интеграция с CRM</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    value: "none",
                    label: "Без интеграции",
                    desc: "Базовая телефония",
                    price: "0 ₽",
                  },
                  {
                    value: "basic",
                    label: "Базовая интеграция",
                    desc: "Клик для звонка, история",
                    price: "+15%",
                  },
                  {
                    value: "advanced",
                    label: "Полная интеграция",
                    desc: "Карточка клиента, аналитика",
                    price: "+30%",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setState({
                        ...state,
                        crmIntegration: option.value as CRMIntegration,
                      })
                    }
                    className={`rounded-lg border-2 p-4 text-center transition-all ${
                      state.crmIntegration === option.value
                        ? "border-green-600 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <h4 className="mb-2 font-semibold">{option.label}</h4>
                    <p className="mb-2 text-sm text-gray-600">{option.desc}</p>
                    <div className="font-bold text-green-700">
                      {option.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Дополнительные функции
              </h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  {
                    id: "call-recording",
                    label: "Запись разговоров",
                    price: "+100 ₽/сотр.",
                  },
                  {
                    id: "video-conference",
                    label: "Видеоконференции",
                    price: "+5 000 ₽/мес",
                  },
                  {
                    id: "analytics",
                    label: "Аналитика звонков",
                    price: "+3 000 ₽/мес",
                  },
                  {
                    id: "mobile-app",
                    label: "Мобильное приложение",
                    price: "+50 ₽/сотр.",
                  },
                  {
                    id: "ivr",
                    label: "Голосовое меню (IVR)",
                    price: "+2 000 ₽/мес",
                  },
                ].map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      const newFeatures = state.features.includes(feature.id)
                        ? state.features.filter((f) => f !== feature.id)
                        : [...state.features, feature.id];
                      setState({ ...state, features: newFeatures });
                    }}
                    className={`rounded-lg border p-3 transition-all ${
                      state.features.includes(feature.id)
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-medium">{feature.label}</div>
                      <div className="text-sm text-gray-600">
                        {feature.price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Уровень поддержки</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    value: "basic",
                    label: "Базовая",
                    desc: "5x8, email поддержка",
                    price: "включено",
                  },
                  {
                    value: "standard",
                    label: "Стандартная",
                    desc: "12x5, телефон + чат",
                    price: "+20%",
                  },
                  {
                    value: "premium",
                    label: "Премиум",
                    desc: "24x7, персональный менеджер",
                    price: "+40%",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setState({
                        ...state,
                        supportLevel: option.value as SupportLevel,
                      })
                    }
                    className={`rounded-lg border-2 p-4 text-center transition-all ${
                      state.supportLevel === option.value
                        ? "border-orange-600 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <h4 className="mb-2 font-semibold">{option.label}</h4>
                    <p className="mb-2 text-sm text-gray-600">{option.desc}</p>
                    <div className="font-bold text-orange-700">
                      {option.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-xl font-semibold">
                Период обслуживания
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    value: "monthly",
                    label: "Помесячно",
                    desc: "Гибкость, можно отменить",
                    discount: "0%",
                    recommended: false,
                  },
                  {
                    value: "quarterly",
                    label: "Квартальный",
                    desc: "Стабильность, меньше бумаг",
                    discount: "5%",
                    recommended: false,
                  },
                  {
                    value: "yearly",
                    label: "Годовой",
                    desc: "Максимальная экономия",
                    discount: "15%",
                    recommended: true,
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      setState({
                        ...state,
                        contractPeriod: option.value as ContractPeriod,
                      })
                    }
                    className={`relative rounded-xl border-2 p-5 text-center transition-all ${
                      state.contractPeriod === option.value
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {option.recommended && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                        Рекомендуем
                      </div>
                    )}
                    <h4 className="mb-2 text-lg font-bold">{option.label}</h4>
                    <p className="mb-3 text-gray-600">{option.desc}</p>
                    <div className="mb-1 text-2xl font-bold text-blue-700">
                      {option.discount} скидка
                    </div>
                    <div className="text-sm text-gray-500">
                      на абонентскую плату
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t pt-4">
              <h3 className="text-xl font-semibold">Дополнительные услуги</h3>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <h4 className="font-medium">Установка и настройка</h4>
                  <p className="text-sm text-gray-600">
                    Профессиональная настройка системы
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-700">20 000 ₽</span>
                  <button
                    onClick={() =>
                      setState({
                        ...state,
                        needInstallation: !state.needInstallation,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      state.needInstallation ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        state.needInstallation
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <h4 className="font-medium">Обучение сотрудников</h4>
                  <p className="text-sm text-gray-600">
                    Индивидуальные тренинги для вашей команды
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-700">15 000 ₽</span>
                  <button
                    onClick={() =>
                      setState({ ...state, needTraining: !state.needTraining })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      state.needTraining ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        state.needTraining ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        const price = calculatePrice();
        return (
          <div className="space-y-8">
            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Стоимость IP-телефонии
              </h3>

              <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm text-gray-500">Ежемесячно</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {formatPrice(price.monthly)} ₽
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    за {state.employees} сотрудников
                  </div>
                </div>

                {state.contractPeriod === "quarterly" && (
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-1 text-sm text-gray-500">Квартально</div>
                    <div className="text-2xl font-bold text-blue-700">
                      {formatPrice(price.quarterly)} ₽
                    </div>
                    <div className="mt-1 text-xs text-green-600">
                      Экономия 5%
                    </div>
                  </div>
                )}

                {state.contractPeriod === "yearly" && (
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-1 text-sm text-gray-500">Ежегодно</div>
                    <div className="text-2xl font-bold text-blue-700">
                      {formatPrice(price.yearly)} ₽
                    </div>
                    <div className="mt-1 text-xs text-green-600">
                      Экономия 15%
                    </div>
                  </div>
                )}

                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm text-gray-500">
                    Единовременно
                  </div>
                  <div className="text-2xl font-bold text-blue-700">
                    {formatPrice(price.setup)} ₽
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    установка и настройка
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Цены округлены до сотен рублей
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Что включено в расчет:</h4>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>{state.employees} сотрудников</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>{state.phoneLines} телефонных линий</span>
                  </li>
                  {state.connectionType && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>
                        {state.connectionType === "cloud"
                          ? "Облачная телефония"
                          : state.connectionType === "hybrid"
                            ? "Гибридное решение"
                            : "Локальная АТС"}
                      </span>
                    </li>
                  )}
                  {state.crmIntegration && state.crmIntegration !== "none" && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>
                        {state.crmIntegration === "basic"
                          ? "Базовая CRM интеграция"
                          : "Полная CRM интеграция"}
                      </span>
                    </li>
                  )}
                </ul>
                <ul className="space-y-2 text-gray-700">
                  {state.features.length > 0 && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span>Доп. функции: {state.features.length} шт</span>
                    </li>
                  )}
                  {state.supportLevel && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span>
                        Поддержка:{" "}
                        {state.supportLevel === "basic"
                          ? "Базовая"
                          : state.supportLevel === "standard"
                            ? "Стандартная"
                            : "Премиум"}
                      </span>
                    </li>
                  )}
                  {state.contractPeriod && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>
                        Контракт:{" "}
                        {state.contractPeriod === "monthly"
                          ? "Помесячно"
                          : state.contractPeriod === "quarterly"
                            ? "Квартальный"
                            : "Годовой"}
                      </span>
                    </li>
                  )}
                  {state.needInstallation && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                      <span>Профессиональная установка</span>
                    </li>
                  )}
                  {state.needTraining && (
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                      <span>Обучение сотрудников</span>
                    </li>
                  )}
                </ul>
              </div>
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
      company: "",
      comment: "",
    });

    return (
      <div className="border-t pt-6">
        <h4 className="mb-4 text-lg font-semibold">
          Получите детальное коммерческое предложение
        </h4>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-lg border p-3"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Название компании"
              className="w-full rounded-lg border p-3"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
          </div>
          <textarea
            placeholder="Особые требования или комментарии"
            className="w-full rounded-lg border p-3"
            rows={3}
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Получить КП
          </button>
          <p className="text-center text-sm text-gray-500">
            Наш специалист свяжется с вами в течение 30 минут
          </p>
        </form>
      </div>
    );
  };

  return (
    <>
      {/* Кнопка на странице услуги */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg"
      >
        Рассчитать стоимость телефонии
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white">
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
                  <h2 className="text-lg font-semibold">
                    Калькулятор IP-телефонии
                  </h2>
                  <div className="mt-1 flex items-center gap-2">
                    {steps.map((step) => (
                      <div key={step.id} className="flex items-center gap-1">
                        <div
                          className={`rounded-full p-1 ${step.id <= state.step ? "text-blue-600" : "text-gray-400"}`}
                        >
                          {step.icon}
                        </div>
                        <div
                          className={`h-1 w-8 rounded-full transition-all ${
                            step.id <= state.step
                              ? "bg-blue-600"
                              : "bg-gray-200"
                          }`}
                        />
                      </div>
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
                      if (validateStep(state.step)) {
                        setState({ ...state, step: state.step + 1 });
                      }
                    }}
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
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

export default Calculator2;
