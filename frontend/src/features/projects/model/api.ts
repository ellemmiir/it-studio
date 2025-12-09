import { Project, ProjectPreview } from './types';

// Временная заглушка
export async function getProjects(): Promise<Project[]> {
  return [
{
  _id: "1",
  title: "Radiant Skincare E-commerce Platform",
  description: "Разработка высоконагруженной e-commerce платформы для бренда ухода за кожей",
  fullDescription:
    "Разработка полнофункциональной e-commerce платформы на стеке MERN (MongoDB, Express, React, Node.js) для бренда Radiant Skincare. Реализованы персонализированные рекомендации на основе ИИ, система управления контентом, интеграция с платежными системами и аналитика в реальном времени.",
  category: "software-development",
  tags: ["ВЕБ-РАЗРАБОТКА", "E-COMMERCE", "ИИ", "БЭКЕНД"],
  image: "/images/content/test.jpg",
  slug: "radiant-skincare-platform",
  client: "Radiant Skincare",
  duration: "3 месяца",
  technologies: ["React", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Stripe API"],
  challenges: [
    "Обработка более 10,000 одновременных пользователей",
    "Интеграция системы рекомендаций на основе машинного обучения",
    "Обеспечение безопасности платежных данных",
  ],
  solutions: [
    "Микросервисная архитектура с балансировкой нагрузки",
    "Внедрение алгоритмов машинного обучения для персонализации",
    "Реализация end-to-end шифрования и PCI DSS compliance",
  ],
  results: [
    "Снижение времени загрузки страниц на 60%",
    "Увеличение конверсии на 40% за счет персонализации",
    "Обработка 50,000+ заказов в месяц без сбоев",
  ],
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01"
},
{
  _id: "2",
  title: "Apex Clothing ERP System",
  description: "Внедрение корпоративной ERP системы для сети одежды",
  fullDescription:
    "Разработка и внедрение корпоративной системы управления ресурсами (ERP) для бренда одежды Apex Clothing. Система объединила управление инвентарем, логистику, CRM и аналитику в единую платформу с мобильным приложением для сотрудников.",
  category: "it-infrastructure",
  tags: ["ERP", "CRM", "MOBILE", "CLOUD"],
  image: "/images/content/test2.jpg",
  slug: "apex-clothing-erp",
  client: "Apex Clothing Co.",
  duration: "4 месяца",
  technologies: ["Java Spring Boot", "PostgreSQL", "React Native", "Kubernetes", "Azure"],
  challenges: [
    "Интеграция с 5 различными legacy системами",
    "Обеспечение работы в оффлайн-режиме для мобильных сотрудников",
    "Масштабирование под 200+ магазинов сети",
  ],
  solutions: [
    "REST API Gateway для интеграции со сторонними системами",
    "PWA-приложение с оффлайн-хранилищем",
    "Контейнеризация и автоматическое масштабирование в облаке",
  ],
  results: [
    "Сокращение времени обработки заказов на 70%",
    "Автоматизация 80% рутинных операций",
    "Единая система данных для всех подразделений",
  ],
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01"
},
{
  _id: "3",
  title: "Vero Social Media AI Moderation",
  description: "Внедрение системы модерации контента на базе ИИ",
  fullDescription:
    "Разработка и внедрение системы автоматической модерации пользовательского контента для социальной сети Vero. Система использует компьютерное зрение и NLP для обнаружения нежелательного контента, спама и нарушений правил сообщества.",
  category: "ai-integration",
  tags: ["ИИ", "NLP", "CV", "МОДЕРАЦИЯ"],
  image: "/images/content/test3.jpg",
  slug: "vero-ai-moderation",
  client: "Vero Social Media",
  duration: "6 месяцев",
  technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Redis", "Docker"],
  challenges: [
    "Обработка 1+ млн изображений и видео ежедневно",
    "Минимизация ложных срабатываний",
    "Адаптация под различные культурные контексты",
  ],
  solutions: [
    "Ансамбль нейросетевых моделей для разных типов контента",
    "Система активного обучения с участием модераторов",
    "Мультиязычная NLP-модель для текстовой модерации",
  ],
  results: [
    "Автоматизация 95% процессов модерации",
    "Снижение времени реакции на нарушения с часов до минут",
    "Сокращение команды модераторов на 70%",
  ],
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01"
},
{
  _id: "4",
  title: "Stoyo Supply Chain Optimization",
  description: "Оптимизация цепочки поставок с помощью IoT и аналитики",
  fullDescription:
    "Разработка IoT-платформы для мониторинга и оптимизации цепочки поставок производителя йогуртов Stoyo. Система включает датчики температуры, отслеживание транспорта в реальном времени и предиктивную аналитику для управления запасами.",
  category: "it-infrastructure",
  tags: ["IoT", "АНАЛИТИКА", "BIG DATA", "REAL-TIME"],
  image: "/images/content/test4.jpg",
  slug: "stoyo-supply-chain",
  client: "Stoyo Foods",
  duration: "2 месяца",
  technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana", "React", "AWS IoT Core"],
  challenges: [
    "Мониторинг температуры в 500+ холодильных установках",
    "Интеграция данных с 30+ логистических партнеров",
    "Прогнозирование спроса с точностью 90%+",
  ],
  solutions: [
    "Распределенная сеть IoT-датчиков с LoRaWAN",
    "Единая платформа данных с API для интеграций",
    "Машинное обучение для прогнозирования спроса",
  ],
  results: [
    "Сокращение потерь продукции на 45%",
    "Улучшение точности прогнозов до 92%",
    "Автоматическое оповещение о нарушениях температурного режима",
  ],
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01"
},
{
  _id: "5",
  title: "Timeless Impressions Cloud Migration",
  description: "Миграция монолитного приложения в облачную микросервисную архитектуру",
  fullDescription:
    "Полная миграция монолитного e-commerce приложения Timeless Impressions из локального дата-центра в облако AWS с переходом на микросервисную архитектуру. Проект включал рефакторинг, контейнеризацию и внедрение CI/CD.",
  category: "devops",
  tags: ["CLOUD", "MICROSERVICES", "CI/CD", "MIGRATION"],
  image: "/images/content/test5.jpg",
  slug: "timeless-cloud-migration",
  client: "Timeless Impressions",
  duration: "5 месяцев",
  technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "GitLab CI", "TypeScript"],
  challenges: [
    "Миграция без простоев работающего продакшена",
    "Переобучение команды разработки",
    "Обеспечение backward compatibility",
  ],
  solutions: [
    "Стратегия blue-green deployment",
    "Поэтапный рефакторинг с feature flags",
    "Полная документация и воркшопы для команды",
  ],
  results: [
    "Снижение затрат на инфраструктуру на 40%",
    "Ускорение деплоя с дней до минут",
    "100% доступность во время миграции",
  ],
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01"
}

  ];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find(project => project.slug === slug) || null;
}

export async function getProjectsPreview(): Promise<ProjectPreview[]> {
  const projects = await getProjects();
  return projects.map(project => ({
    _id: project._id,
    title: project.title,
    description: project.description,
    category: project.category,
    tags: project.tags,
    image: project.image,
    slug: project.slug
  }));
}