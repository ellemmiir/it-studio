import { apiClient } from '../client';
import { Project, ProjectPreview } from '@/features/projects/model/types';
import { Service } from '@/features/services/model/types'; // Для типизации услуг

// Временная заглушка с проектами (50 проектов как вы указали)
const MOCK_PROJECTS: Project[] = [
   {
    _id: "1",
    title: "Radiant Skincare E-commerce Platform",
    description: "Разработка высоконагруженной e-commerce платформы для бренда ухода за кожей",
    fullDescription: "Разработка полнофункциональной e-commerce платформы на стеке MERN (MongoDB, Express, React, Node.js) для бренда Radiant Skincare. Реализованы персонализированные рекомендации на основе ИИ, система управления контентом, интеграция с платежными системами и аналитика в реальном времени.",
    category: "software-development",
    tags: ["ВЕБ-РАЗРАБОТКА", "E-COMMERCE", "ИИ", "БЭКЕНД"],
    image: "/images/content/test.jpg",
    slug: "radiant-skincare-platform",
    client: "Radiant Skincare",
    duration: "3 месяца",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TensorFlow.js", "Stripe API"],
    challenges: ["Обработка более 10,000 одновременных пользователей", "Интеграция системы рекомендаций на основе машинного обучения", "Обеспечение безопасности платежных данных"],
    solutions: ["Микросервисная архитектура с балансировкой нагрузки", "Внедрение алгоритмов машинного обучения для персонализации", "Реализация end-to-end шифрования и PCI DSS compliance"],
    results: ["Снижение времени загрузки страниц на 60%", "Увеличение конверсии на 40% за счет персонализации", "Обработка 50,000+ заказов в месяц без сбоев"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01"
  },
  {
    _id: "2",
    title: "Apex Clothing ERP System",
    description: "Внедрение корпоративной ERP системы для сети одежды",
    fullDescription: "Разработка и внедрение корпоративной системы управления ресурсами (ERP) для бренда одежды Apex Clothing. Система объединила управление инвентарем, логистику, CRM и аналитику в единую платформу с мобильным приложением для сотрудников.",
    category: "it-infrastructure",
    tags: ["ERP", "CRM", "MOBILE", "CLOUD"],
    image: "/images/content/test2.jpg",
    slug: "apex-clothing-erp",
    client: "Apex Clothing Co.",
    duration: "4 месяца",
    technologies: ["Java Spring Boot", "PostgreSQL", "React Native", "Kubernetes", "Azure"],
    challenges: ["Интеграция с 5 различными legacy системами", "Обеспечение работы в оффлайн-режиме для мобильных сотрудников", "Масштабирование под 200+ магазинов сети"],
    solutions: ["REST API Gateway для интеграции со сторонними системами", "PWA-приложение с оффлайн-хранилищем", "Контейнеризация и автоматическое масштабирование в облаке"],
    results: ["Сокращение времени обработки заказов на 70%", "Автоматизация 80% рутинных операций", "Единая система данных для всех подразделений"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01"
  },
  {
    _id: "3",
    title: "Vero Social Media AI Moderation",
    description: "Внедрение системы модерации контента на базе ИИ",
    fullDescription: "Разработка и внедрение системы автоматической модерации пользовательского контента для социальной сети Vero. Система использует компьютерное зрение и NLP для обнаружения нежелательного контента, спама и нарушений правил сообщества.",
    category: "ai-integration",
    tags: ["ИИ", "NLP", "CV", "МОДЕРАЦИЯ"],
    image: "/images/content/test3.jpg",
    slug: "vero-ai-moderation",
    client: "Vero Social Media",
    duration: "6 месяцев",
    technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Redis", "Docker"],
    challenges: ["Обработка 1+ млн изображений и видео ежедневно", "Минимизация ложных срабатываний", "Адаптация под различные культурные контексты"],
    solutions: ["Ансамбль нейросетевых моделей для разных типов контента", "Система активного обучения с участием модераторов", "Мультиязычная NLP-модель для текстовой модерации"],
    results: ["Автоматизация 95% процессов модерации", "Снижение времени реакции на нарушения с часов до минут", "Сокращение команды модераторов на 70%"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01"
  },
  {
    _id: "4",
    title: "Stoyo Supply Chain Optimization",
    description: "Оптимизация цепочки поставок с помощью IoT и аналитики",
    fullDescription: "Разработка IoT-платформы для мониторинга и оптимизации цепочки поставок производителя йогуртов Stoyo. Система включает датчики температуры, отслеживание транспорта в реальном времени и предиктивную аналитику для управления запасами.",
    category: "it-infrastructure",
    tags: ["IoT", "АНАЛИТИКА", "BIG DATA", "REAL-TIME"],
    image: "/images/content/test4.jpg",
    slug: "stoyo-supply-chain",
    client: "Stoyo Foods",
    duration: "2 месяца",
    technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana", "React", "AWS IoT Core"],
    challenges: ["Мониторинг температуры в 500+ холодильных установках", "Интеграция данных с 30+ логистических партнеров", "Прогнозирование спроса с точностью 90%+"],
    solutions: ["Распределенная сеть IoT-датчиков с LoRaWAN", "Единая платформа данных с API для интеграций", "Машинное обучение для прогнозирования спроса"],
    results: ["Сокращение потерь продукции на 45%", "Улучшение точности прогнозов до 92%", "Автоматическое оповещение о нарушениях температурного режима"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01"
  },
  {
    _id: "5",
    title: "Timeless Impressions Cloud Migration",
    description: "Миграция монолитного приложения в облачную микросервисную архитектуру",
    fullDescription: "Полная миграция монолитного e-commerce приложения Timeless Impressions из локального дата-центра в облако AWS с переходом на микросервисную архитектуру. Проект включал рефакторинг, контейнеризацию и внедрение CI/CD.",
    category: "devops",
    tags: ["CLOUD", "MICROSERVICES", "CI/CD", "MIGRATION"],
    image: "/images/content/test5.jpg",
    slug: "timeless-cloud-migration",
    client: "Timeless Impressions",
    duration: "5 месяцев",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "GitLab CI", "TypeScript"],
    challenges: ["Миграция без простоев работающего продакшена", "Переобучение команды разработки", "Обеспечение backward compatibility"],
    solutions: ["Стратегия blue-green deployment", "Поэтапный рефакторинг с feature flags", "Полная документация и воркшопы для команды"],
    results: ["Снижение затрат на инфраструктуру на 40%", "Ускорение деплоя с дней до минут", "100% доступность во время миграции"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01"
  },
  {
    _id: "6",
    title: "FinTech Banking App",
    description: "Разработка мобильного банкинга с биометрической аутентификацией",
    fullDescription: "Создание нативного мобильного приложения для банка с поддержкой биометрической аутентификации, бесконтактных платежей и финансовых советников на базе ИИ.",
    category: "mobile-development",
    tags: ["MOBILE", "FINTECH", "SECURITY", "AI"],
    image: "/images/content/test6.jpg",
    slug: "fintech-banking-app",
    client: "Global Trust Bank",
    duration: "5 месяцев",
    technologies: ["Swift", "Kotlin", "React Native", "Firebase", "Face ID API", "Apple Pay"],
    challenges: ["Соответствие стандартам PCI DSS и GDPR", "Реализация оффлайн-режима", "Поддержка 10+ валют"],
    solutions: ["Шифрование данных end-to-end", "Синхронизация при восстановлении соединения", "Мультивалютный движок с реальными курсами"],
    results: ["Снижение мошеннических операций на 75%", "Увеличение активных пользователей на 120%", "Рейтинг 4.8+ в App Store и Google Play"],
    createdAt: "2024-02-15",
    updatedAt: "2024-02-15"
  },
  {
    _id: "7",
    title: "Healthcare Telemedicine Platform",
    description: "Платформа телемедицины для сети клиник",
    fullDescription: "Разработка комплексной платформы телемедицины, включающей видеоконсультации, электронные медкарты, онлайн-запись и интеграцию с медицинским оборудованием.",
    category: "software-development",
    tags: ["HEALTHCARE", "TELEMEDICINE", "VIDEO", "SECURITY"],
    image: "/images/content/test7.jpg",
    slug: "healthcare-telemedicine-platform",
    client: "MediCare Network",
    duration: "6 месяцев",
    technologies: ["WebRTC", "Node.js", "MongoDB", "React", "HIPAA Compliance", "AWS"],
    challenges: ["Обеспечение конфиденциальности медицинских данных", "Стабильная видео-связь при низком интернете", "Интеграция с 20+ видами медоборудования"],
    solutions: ["Сертификация HIPAA и GDPR", "Адаптивное качество видео", "Универсальный API для интеграции"],
    results: ["Увеличение охвата пациентов на 300%", "Сокращение времени ожидания приема с 3 дней до 30 минут", "Автоматизация 60% административных задач"],
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10"
  },
  {
    _id: "8",
    title: "Smart City Traffic Management",
    description: "Система управления городским трафиком на базе ИИ",
    fullDescription: "Внедрение интеллектуальной системы управления дорожным движением, использующей камеры, датчики и машинное обучение для оптимизации светофоров и уменьшения пробок.",
    category: "ai-integration",
    tags: ["SMART CITY", "AI", "IoT", "REAL-TIME"],
    image: "/images/content/test8.jpg",
    slug: "smart-city-traffic-management",
    client: "City Municipal Government",
    duration: "8 месяцев",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Docker", "AWS IoT", "Redis"],
    challenges: ["Обработка данных с 500+ камер в реальном времени", "Прогнозирование трафика в праздничные дни", "Интеграция с существующей инфраструктурой"],
    solutions: ["Распределенная обработка видео", "Прогнозные модели на основе исторических данных", "REST API для интеграции с городскими системами"],
    results: ["Снижение пробок на 35%", "Уменьшение времени в пути на 25%", "Сокращение ДТП на 40%"],
    createdAt: "2024-04-05",
    updatedAt: "2024-04-05"
  },
  {
    _id: "9",
    title: "EdTech Learning Platform",
    description: "Интерактивная образовательная платформа для школ",
    fullDescription: "Создание платформы для дистанционного обучения с интерактивными уроками, автоматической проверкой заданий и адаптивным обучением.",
    category: "software-development",
    tags: ["EDTECH", "EDUCATION", "LMS", "GAMIFICATION"],
    image: "/images/content/test9.jpg",
    slug: "edtech-learning-platform",
    client: "EduFuture Schools",
    duration: "4 месяца",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Canvas API", "LTI"],
    challenges: ["Поддержка 10,000+ одновременных пользователей", "Создание интерактивных упражнений", "Интеграция с школьными системами"],
    solutions: ["Микросервисная архитектура", "Конструктор интерактивных заданий", "Стандарт LTI для интеграции"],
    results: ["Улучшение успеваемости на 28%", "Увеличение вовлеченности студентов на 65%", "Внедрение в 200+ школ"],
    createdAt: "2024-05-20",
    updatedAt: "2024-05-20"
  },
  {
    _id: "10",
    title: "Retail Analytics Dashboard",
    description: "Дашборд аналитики для розничной сети",
    fullDescription: "Разработка BI-панели для анализа продаж, трафика в магазинах и эффективности маркетинговых кампаний в реальном времени.",
    category: "data-analytics",
    tags: ["BI", "ANALYTICS", "RETAIL", "REAL-TIME"],
    image: "/images/content/test10.jpg",
    slug: "retail-analytics-dashboard",
    client: "MegaRetail Chain",
    duration: "3 месяца",
    technologies: ["React", "D3.js", "Python", "PostgreSQL", "Apache Superset", "Redis"],
    challenges: ["Агрегация данных из 15+ источников", "Обновление данных в реальном времени", "Создание интуитивных визуализаций"],
    solutions: ["Data pipeline на Apache Airflow", "WebSocket для real-time обновлений", "Кастомные графики на D3.js"],
    results: ["Увеличение среднего чека на 15%", "Сокращение излишков инвентаря на 30%", "Экономия $2M+ на маркетинге"],
    createdAt: "2024-06-15",
    updatedAt: "2024-06-15"
  },
];

// Типы для параметров запроса
export interface GetProjectsParams {
  serviceSlug?: string; // Фильтр по услуге (slug услуги)
  limit?: number;
  offset?: number;
  search?: string; // Поиск по названию/описанию
}

export const projectsEndpoints = {
  // Получение всех проектов с пагинацией и фильтрацией
  getAll: (params?: GetProjectsParams): Promise<{ data: Project[]; total: number }> => {
    return new Promise(resolve => {
      setTimeout(() => {
        let filteredProjects = [...MOCK_PROJECTS];
        
        // Фильтрация по услуге
        if (params?.serviceSlug && params.serviceSlug !== 'all') {
          // Здесь будет логика фильтрации проектов по услуге
          // Пока оставляем все проекты - логику добавим в сервисе
          filteredProjects = filteredProjects.filter(project => {
            // Временная заглушка - каждый 3й проект относится к услуге
            // В реальности здесь будет связь проектов с услугами
            const projectIndex = parseInt(project._id);
            const serviceIndex = ['web-development', 'mobile-development', 'it-infrastructure', 
                                  'ai-integration', 'data-analytics', 'cybersecurity', 
                                  'cloud-services', 'support'].indexOf(params.serviceSlug!);
            
            if (serviceIndex >= 0) {
              // Простая логика распределения проектов по услугам
              return (projectIndex + serviceIndex) % 8 === 0;
            }
            return true;
          });
        }
        
        // Поиск по названию/описанию
        if (params?.search) {
          const searchLower = params.search.toLowerCase();
          filteredProjects = filteredProjects.filter(project => 
            project.title.toLowerCase().includes(searchLower) ||
            project.description.toLowerCase().includes(searchLower) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchLower))
          );
        }
        
        const total = filteredProjects.length;
        
        // Пагинация
        const offset = params?.offset || 0;
        const limit = params?.limit || filteredProjects.length;
        const paginatedProjects = filteredProjects.slice(offset, offset + limit);
        
        resolve({ data: paginatedProjects, total });
      }, 100); // Имитация задержки сети
    });
  },
  
  // Получение проекта по slug
  getBySlug: (slug: string): Promise<Project> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const project = MOCK_PROJECTS.find(p => p.slug === slug);
        if (project) {
          resolve(project);
        } else {
          reject(new Error('NOT_FOUND'));
        }
      }, 100);
    });
  },
  
  // Получение превью проектов (ограниченное количество)
  getPreview: (params?: { serviceSlug?: string; limit?: number }): Promise<ProjectPreview[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        let filteredProjects = [...MOCK_PROJECTS];
        
        if (params?.serviceSlug && params.serviceSlug !== 'all') {
          // Фильтрация по услуге для превью
          const projectIndex = Math.floor(Math.random() * MOCK_PROJECTS.length);
          // Возвращаем случайные проекты для данной услуги
          filteredProjects = filteredProjects.filter((_, index) => 
            index % 8 === ['web-development', 'mobile-development', 'it-infrastructure', 
                         'ai-integration', 'data-analytics', 'cybersecurity', 
                         'cloud-services', 'support'].indexOf(params.serviceSlug!)
          ).slice(0, params.limit || 6);
        } else {
          // Для "всех проектов" берем лимит
          filteredProjects = filteredProjects.slice(0, params?.limit || 12);
        }
        
        const previews: ProjectPreview[] = filteredProjects.map(project => ({
          _id: project._id,
          title: project.title,
          description: project.description,
          category: project.category,
          tags: project.tags,
          image: project.image,
          slug: project.slug
        }));
        
        resolve(previews);
      }, 100);
    });
  }
};