# IT Studio Backend - Полная API Документация

## Оглавление
1. [Общая информация](#общая-информация)
2. [Аутентификация](#аутентификация)
3. [Услуги (Services)](#услуги-services)
4. [Заказы (Orders)](#заказы-orders)
5. [Сообщения (Messages)](#сообщения-messages)
6. [Файлы (Files)](#файлы-files)
7. [Счета (Invoices)](#счета-invoices)
8. [Калькулятор (Calculator)](#калькулятор-calculator)
9. [Типы данных](#типы-данных)
10. [Коды ошибок](#коды-ошибок)

---

## Общая информация

**Base URL**: `http://localhost:3001/api/v1`

**Content-Type**: `application/json`

**Authentication**: Bearer Token (JWT)
```
Authorization: Bearer <your_jwt_token>
```

---

## Аутентификация

### 1. Регистрация нового пользователя

**Endpoint**: `POST /api/v1/auth/register`

**Описание**: Создание нового аккаунта пользователя в системе

**Headers**:
```
Content-Type: application/json
```

**Request Body**:
```typescript
{
  email: string;          // Email пользователя (обязательно)
                          // Валидация: email format
                          // Пример: "user@example.com"
  
  password: string;       // Пароль (обязательно)
                          // Валидация: минимум 8 символов
                          // Пример: "MySecurePass123!"
  
  firstName: string;      // Имя (обязательно)
                          // Валидация: 2-50 символов
                          // Пример: "Иван"
  
  lastName: string;       // Фамилия (обязательно)
                          // Валидация: 2-50 символов
                          // Пример: "Иванов"
  
  companyName?: string;   // Название компании (опционально)
                          // Пример: "ООО Ромашка"
  
  phone?: string;         // Телефон (опционально)
                          // Валидация: российский формат
                          // Пример: "+7 (999) 123-45-67"
}
```

**Response**: `201 Created`
```typescript
{
  accessToken: string;    // JWT токен для аутентификации
                          // Действителен: 1 час
                          // Пример: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  
  refreshToken: string;   // Токен для обновления accessToken
                          // Действителен: 30 дней
                          // Пример: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  
  user: {
    id: string;           // ID пользователя (MongoDB ObjectId)
    email: string;        // Email пользователя
    role: "client";       // Роль: client | manager | engineer | admin | finance
    profile: {
      firstName: string;  // Имя
      lastName: string;   // Фамилия
      companyName?: string; // Название компании
      phone?: string;     // Телефон
    }
  }
}
```

**Errors**:
- `400 Bad Request` - Неверный формат данных
- `409 Conflict` - Email уже зарегистрирован
- `422 Unprocessable Entity` - Ошибка валидации

---

### 2. Авторизация

**Endpoint**: `POST /api/v1/auth/login`

**Описание**: Вход в систему

**Headers**:
```
Content-Type: application/json
```

**Request Body**:
```typescript
{
  email: string;          // Email (обязательно)
                          // Пример: "user@example.com"
  
  password: string;       // Пароль (обязательно)
                          // Пример: "MySecurePass123!"
}
```

**Response**: `200 OK`
```typescript
{
  accessToken: string;    // JWT токен
  refreshToken: string;   // Refresh токен
  user: {
    id: string;
    email: string;
    role: string;
    profile: {
      firstName: string;
      lastName: string;
    }
  }
}
```

**Errors**:
- `400 Bad Request` - Неверный формат данных
- `401 Unauthorized` - Неверный email или пароль
- `403 Forbidden` - Аккаунт заблокирован

---

### 3. Обновление токена

**Endpoint**: `POST /api/v1/auth/refresh`

**Описание**: Обновление access token используя refresh token

**Request Body**:
```typescript
{
  refreshToken: string;   // Refresh токен (обязательно)
}
```

**Response**: `200 OK`
```typescript
{
  accessToken: string;    // Новый JWT токен
  refreshToken: string;   // Новый refresh токен
}
```

**Errors**:
- `401 Unauthorized` - Невалидный или истекший refresh token

---

## Услуги (Services)

### 1. Список всех услуг

**Endpoint**: `GET /api/v1/services`

**Описание**: Получение списка всех активных услуг с актуальными ценами (с учетом демпинга)

**Headers**: Не требуется аутентификация

**Query Parameters**: Нет

**Response**: `200 OK`
```typescript
[
  {
    id: string;           // ID услуги (MongoDB ObjectId)
                          // Пример: "507f1f77bcf86cd799439011"
    
    slug: string;         // URL-friendly идентификатор
                          // Пример: "it-infrastructure"
    
    title: string;        // Название услуги
                          // Пример: "Развитие и поддержка ИТ-инфраструктуры"
    
    category: string;     // Категория услуги
                          // Варианты: infrastructure | telephony | compliance | 
                          //           development | security | devops | audit | ai
    
    description: string;  // Описание услуги
                          // Пример: "Полный цикл поддержки IT-инфраструктуры"
    
    features: string[];   // Список возможностей
                          // Пример: ["Мониторинг 24/7", "Резервное копирование"]
    
    marketPrice: {        // Рыночная цена
      min: number;        // Минимальная цена (руб.)
      max: number;        // Максимальная цена (руб.)
    };
    
    currentPrice: {       // Текущая цена (с учетом демпинга)
      min: number;        // Минимальная цена (руб.)
      max: number;        // Максимальная цена (руб.)
    };
    
    isDumpActive: boolean; // Активен ли демпинг
                           // true - демпинговые цены действуют
                           // false - обычные цены после демпинга
    
    dumpActiveUntil?: Date; // Дата окончания демпинга
                            // ISO 8601 format
                            // Пример: "2025-04-20T00:00:00.000Z"
    
    options: Array<{      // Опции для конфигурации
      key: string;        // Ключ опции
                          // Пример: "workplaces"
      
      title: string;      // Название опции
                          // Пример: "Количество рабочих мест"
      
      type: string;       // Тип опции
                          // Варианты: number | select | bool
      
      values?: any[];     // Возможные значения
                          // Для number: [min, max]
                          // Для select: ["option1", "option2"]
    }>;
    
    isActive: boolean;    // Активна ли услуга
  }
]
```

**Example Response**:
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "slug": "it-infrastructure",
    "title": "Развитие и поддержка ИТ-инфраструктуры",
    "category": "infrastructure",
    "description": "Полный цикл поддержки IT-инфраструктуры вашего бизнеса",
    "features": [
      "Мониторинг серверов 24/7",
      "Обновление ПО",
      "Резервное копирование"
    ],
    "marketPrice": { "min": 4000, "max": 8000 },
    "currentPrice": { "min": 3000, "max": 6000 },
    "isDumpActive": true,
    "dumpActiveUntil": "2025-04-20T00:00:00.000Z",
    "options": [
      {
        "key": "workplaces",
        "title": "Количество рабочих мест",
        "type": "number",
        "values": [1, 100]
      }
    ],
    "isActive": true
  }
]
```

---

### 2. Детали услуги

**Endpoint**: `GET /api/v1/services/:id`

**Описание**: Получение детальной информации об услуге

**URL Parameters**:
```typescript
id: string;  // ID или slug услуги (обязательно)
             // Пример: "507f1f77bcf86cd799439011" или "it-infrastructure"
```

**Response**: `200 OK` - Объект услуги (см. структуру выше)

**Errors**:
- `404 Not Found` - Услуга не найдена

---

## Заказы (Orders)

### 1. Список заказов

**Endpoint**: `GET /api/v1/orders`

**Описание**: Получение списка заказов с фильтрацией и пагинацией

**Headers**:
```
Authorization: Bearer <token>  // Обязательно
```

**Query Parameters**:
```typescript
{
  status?: string;        // Фильтр по статусу (опционально)
                          // Варианты: new | discovery | proposal | in_progress |
                          //           review | done | archived | lost
                          // Пример: "in_progress"
  
  page?: number;          // Номер страницы (опционально, default: 1)
                          // Валидация: >= 1
                          // Пример: 1
  
  limit?: number;         // Количество на странице (опционально, default: 20)
                          // Валидация: 1-100
                          // Пример: 20
}
```

**Response**: `200 OK`
```typescript
{
  orders: Array<{
    id: string;           // ID заказа
    title: string;        // Название заказа
    status: string;       // Статус заказа
    priority: number;     // Приоритет (1-высокий, 2-средний, 3-низкий)
    serviceId: string;    // ID услуги
    serviceTitle: string; // Название услуги
    estimate: {           // Оценка стоимости
      min: number;        // Минимум (руб.)
      max: number;        // Максимум (руб.)
      currency: string;   // Валюта (RUB)
    };
    assignedTo?: string;  // ID назначенного менеджера
    participants: string[]; // Список ID участников
    createdAt: Date;      // Дата создания (ISO 8601)
    updatedAt: Date;      // Дата обновления (ISO 8601)
  }>;
  
  pagination: {
    page: number;         // Текущая страница
    limit: number;        // Элементов на странице
    total: number;        // Всего заказов
    pages: number;        // Всего страниц
  };
}
```

**Errors**:
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа к заказам

---

### 2. Детали заказа

**Endpoint**: `GET /api/v1/orders/:id`

**Описание**: Получение детальной информации о заказе

**Headers**:
```
Authorization: Bearer <token>
```

**URL Parameters**:
```typescript
id: string;  // ID заказа (обязательно)
             // Пример: "507f1f77bcf86cd799439011"
```

**Response**: `200 OK`
```typescript
{
  id: string;                   // ID заказа
  title: string;                // Название
  status: string;               // Статус
  priority: number;             // Приоритет (1-3)
  serviceId: string;            // ID услуги
  serviceTitle: string;         // Название услуги
  
  brief: {                      // Бриф заказа
    description: string;        // Описание
    requirements: string[];     // Требования
    timeline?: string;          // Сроки
    budget?: number;            // Бюджет
    [key: string]: any;         // Дополнительные поля
  };
  
  estimate: {                   // Оценка
    min: number;
    max: number;
    currency: string;
  };
  
  assignedTo?: {                // Назначенный менеджер
    id: string;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
    };
  };
  
  participants: Array<{         // Участники
    id: string;
    email: string;
    role: string;
    profile: {
      firstName: string;
      lastName: string;
    };
  }>;
  
  files: string[];              // ID файлов
  
  messagesThreadId?: string;    // ID треда сообщений
  
  checklist: Array<{            // Чек-лист задач
    text: string;               // Текст задачи
    done: boolean;              // Выполнено
  }>;
  
  timeline: Array<{             // История изменений
    at: Date;                   // Дата/время (ISO 8601)
    by: string;                 // ID пользователя
    action: string;             // Действие (created | status_changed | assigned | etc.)
    payload: any;               // Дополнительные данные
  }>;
  
  createdAt: Date;              // Дата создания
  updatedAt: Date;              // Дата обновления
}
```

**Errors**:
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа к заказу
- `404 Not Found` - Заказ не найден

---

### 3. Создание заказа

**Endpoint**: `POST /api/v1/orders`

**Описание**: Создание нового заказа

**Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**:
```typescript
{
  serviceId: string;      // ID услуги (обязательно)
                          // Валидация: valid MongoDB ObjectId
                          // Пример: "507f1f77bcf86cd799439011"
  
  title: string;          // Название заказа (обязательно)
                          // Валидация: 5-200 символов
                          // Пример: "Разработка CRM системы"
  
  brief: {                // Бриф (обязательно)
    description: string;  // Описание задачи (обязательно)
                          // Валидация: 20-5000 символов
    
    requirements?: string[]; // Требования (опционально)
    timeline?: string;    // Желаемые сроки (опционально)
    budget?: number;      // Бюджет (опционально)
    
    [key: string]: any;   // Дополнительные поля из опций услуги
                          // Пример: workplaces: 15
  };
}
```

**Response**: `201 Created`
```typescript
{
  id: string;             // ID созданного заказа
  title: string;          // Название
  status: string;         // Статус (будет "new")
  serviceId: string;      // ID услуги
  brief: object;          // Бриф заказа
  createdAt: Date;        // Дата создания
}
```

**Errors**:
- `400 Bad Request` - Неверный формат данных
- `401 Unauthorized` - Не авторизован
- `404 Not Found` - Услуга не найдена
- `422 Unprocessable Entity` - Ошибка валидации

---

### 4. Обновление заказа

**Endpoint**: `PATCH /api/v1/orders/:id`

**Описание**: Обновление статуса, назначения или приоритета заказа

**Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**URL Parameters**:
```typescript
id: string;  // ID заказа
```

**Request Body**:
```typescript
{
  status?: string;        // Новый статус (опционально)
                          // Варианты: new | discovery | proposal | in_progress |
                          //           review | done | archived | lost
  
  assignedTo?: string;    // ID менеджера (опционально)
                          // Валидация: valid MongoDB ObjectId
  
  priority?: number;      // Приоритет (опционально)
                          // Валидация: 1 | 2 | 3
}
```

**Response**: `200 OK`
```typescript
{
  id: string;
  title: string;
  status: string;
  priority: number;
  assignedTo?: string;
  updatedAt: Date;
}
```

**Errors**:
- `400 Bad Request` - Неверный формат
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет прав на изменение
- `404 Not Found` - Заказ не найден

---

## Сообщения (Messages)

### 1. Получение сообщений

**Endpoint**: `GET /api/v1/messages`

**Описание**: Получение сообщений из треда с пагинацией

**Headers**:
```
Authorization: Bearer <token>
```

**Query Parameters**:
```typescript
{
  threadId: string;       // ID треда (обязательно)
                          // Валидация: valid MongoDB ObjectId
                          // Пример: "507f1f77bcf86cd799439011"
  
  cursor?: string;        // Курсор для пагинации (опционально)
                          // ID последнего загруженного сообщения
                          // Пример: "507f1f77bcf86cd799439012"
  
  limit?: number;         // Количество сообщений (опционально, default: 50)
                          // Валидация: 1-100
                          // Пример: 50
}
```

**Response**: `200 OK`
```typescript
{
  messages: Array<{
    id: string;                 // ID сообщения
    threadId: string;           // ID треда
    orderId?: string;           // ID заказа (если связано)
    
    fromUser: {                 // Отправитель
      id: string;
      email: string;
      profile: {
        firstName: string;
        lastName: string;
      };
    };
    
    toUserId?: string;          // ID получателя (опционально)
    
    type: string;               // Тип сообщения
                                // Варианты: text | file | system | quote | checklist | code
    
    text: string;               // Текст сообщения
    
    files: Array<{              // Прикрепленные файлы
      id: string;               // ID файла
      filename: string;         // Имя файла
      url: string;              // URL для скачивания
    }>;
    
    meta: {                     // Метаданные
      tags?: string[];          // Теги (urgent | finance | scope | legal)
      quotedMessageId?: string; // ID цитируемого сообщения
      [key: string]: any;       // Дополнительные поля
    };
    
    readBy: string[];           // ID пользователей, прочитавших сообщение
    
    createdAt: Date;            // Дата создания (ISO 8601)
  }>;
  
  nextCursor: string | null;    // Курсор для следующей страницы
                                // null если это последняя страница
}
```

**Errors**:
- `400 Bad Request` - threadId не указан или неверный
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа к треду

---

### 2. Отправка сообщения

**Endpoint**: `POST /api/v1/messages`

**Описание**: Отправка нового сообщения в тред

**Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**:
```typescript
{
  threadId: string;       // ID треда (обязательно)
                          // Валидация: valid MongoDB ObjectId
  
  text: string;           // Текст сообщения (обязательно)
                          // Валидация: 1-10000 символов
  
  files?: string[];       // ID прикрепленных файлов (опционально)
                          // Валидация: array of valid ObjectIds
  
  meta?: {                // Метаданные (опционально)
    tags?: string[];      // Теги
                          // Варианты: urgent | finance | scope | legal
    
    quotedMessageId?: string; // ID цитируемого сообщения
                              // Валидация: valid ObjectId
  };
}
```

**Response**: `201 Created`
```typescript
{
  id: string;             // ID созданного сообщения
  threadId: string;       // ID треда
  text: string;           // Текст
  createdAt: Date;        // Дата создания
}
```

**Errors**:
- `400 Bad Request` - Неверный формат
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа к треду
- `404 Not Found` - Тред не найден
- `422 Unprocessable Entity` - Ошибка валидации

---

## Файлы (Files)

### 1. Загрузка файла

**Endpoint**: `POST /api/v1/files`

**Описание**: Загрузка файла в систему (MinIO)

**Headers**:
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Form Data**:
```typescript
{
  file: File;             // Файл (обязательно)
                          // Валидация:
                          //   - Максимальный размер: 50MB
                          //   - Разрешенные типы: pdf, doc, docx, xls, xlsx,
                          //     jpg, jpeg, png, gif, zip, rar, 7z
  
  linkedToType: string;   // Тип связанной сущности (обязательно)
                          // Варианты: order | message | invoice | user
  
  linkedToId: string;     // ID связанной сущности (обязательно)
                          // Валидация: valid MongoDB ObjectId
}
```

**Response**: `201 Created`
```typescript
{
  id: string;             // ID файла в системе
  filename: string;       // Оригинальное имя файла
  size: number;           // Размер в байтах
  mime: string;           // MIME type
  url: string;            // Presigned URL для скачивания
                          // Действителен: 24 часа
  virusScanned: boolean;  // Результат антивирусной проверки
  createdAt: Date;        // Дата загрузки
}
```

**Errors**:
- `400 Bad Request` - Файл не предоставлен или неверный формат
- `401 Unauthorized` - Не авторизован
- `413 Payload Too Large` - Файл слишком большой
- `415 Unsupported Media Type` - Неподдерживаемый тип файла
- `422 Unprocessable Entity` - Ошибка валидации параметров

---

### 2. Получение информации о файле

**Endpoint**: `GET /api/v1/files/:id`

**Описание**: Получение метаданных и URL для скачивания файла

**Headers**:
```
Authorization: Bearer <token>
```

**URL Parameters**:
```typescript
id: string;  // ID файла (обязательно)
```

**Response**: `200 OK`
```typescript
{
  id: string;                 // ID файла
  filename: string;           // Имя файла
  size: number;               // Размер (байты)
  mime: string;               // MIME type
  url: string;                // Presigned URL для скачивания
  virusScanned: boolean;      // Проверка антивирусом
  ownerId: string;            // ID владельца
  linkedTo: {                 // Связь с сущностью
    type: string;             // Тип (order | message | invoice | user)
    id: string;               // ID сущности
  };
  createdAt: Date;            // Дата создания
}
```

**Errors**:
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа к файлу
- `404 Not Found` - Файл не найден

---

## Счета (Invoices)

### 1. Список счетов

**Endpoint**: `GET /api/v1/invoices`

**Описание**: Получение списка счетов с фильтрацией

**Headers**:
```
Authorization: Bearer <token>
```

**Query Parameters**:
```typescript
{
  orderId?: string;       // Фильтр по заказу (опционально)
                          // Валидация: valid MongoDB ObjectId
  
  status?: string;        // Фильтр по статусу (опционально)
                          // Варианты: draft | issued | paid | void
}
```

**Response**: `200 OK`
```typescript
{
  invoices: Array<{
    id: string;               // ID счета
    orderId: string;          // ID заказа
    orderTitle: string;       // Название заказа
    number: string;           // Номер счета
                              // Формат: INV-YYYY-NNN
                              // Пример: "INV-2025-001"
    amount: number;           // Сумма (руб.)
    currency: string;         // Валюта (RUB)
    status: string;           // Статус
                              // Варианты: draft | issued | paid | void
    pdfFileId?: string;       // ID PDF файла
    issuedAt: Date;           // Дата выставления
    paidAt?: Date;            // Дата оплаты
  }>;
}
```

**Errors**:
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа к счетам

---

### 2. Создание счета

**Endpoint**: `POST /api/v1/invoices`

**Описание**: Создание нового счета для заказа

**Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**:
```typescript
{
  orderId: string;        // ID заказа (обязательно)
                          // Валидация: valid MongoDB ObjectId
  
  items: Array<{          // Позиции счета (обязательно)
    description: string;  // Описание (обязательно)
                          // Валидация: 5-500 символов
    
    quantity: number;     // Количество (обязательно)
                          // Валидация: > 0
    
    price: number;        // Цена за единицу (обязательно)
                          // Валидация: > 0
    
    total: number;        // Сумма (обязательно)
                          // Валидация: quantity * price
  }>;
  
  notes?: string;         // Примечания (опционально)
                          // Валидация: до 1000 символов
}
```

**Response**: `201 Created`
```typescript
{
  id: string;             // ID созданного счета
  orderId: string;        // ID заказа
  number: string;         // Номер счета
  amount: number;         // Общая сумма
  currency: string;       // Валюта
  status: string;         // Статус (будет "draft")
  createdAt: Date;        // Дата создания
}
```

**Errors**:
- `400 Bad Request` - Неверный формат
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет прав на создание счета
- `404 Not Found` - Заказ не найден
- `422 Unprocessable Entity` - Ошибка валидации

---

## Калькулятор (Calculator)

### 1. Расчет стоимости услуги

**Endpoint**: `POST /api/v1/calc/:serviceId`

**Описание**: Расчет стоимости услуги с учетом параметров и демпинга

**Headers**: Не требуется аутентификация

**URL Parameters**:
```typescript
serviceId: string;  // ID услуги (обязательно)
                    // Валидация: valid MongoDB ObjectId
```

**Request Body**:
```typescript
{
  options: {              // Параметры услуги (обязательно)
    complexity?: string;  // Сложность (опционально)
                          // Варианты: low | medium | high
                          // Влияние: low=1.0, medium=1.2, high=1.5
    
    timeline?: string;    // Срочность (опционально)
                          // Варианты: normal | urgent
                          // Влияние: normal=1.0, urgent=1.3
    
    teamSize?: number;    // Размер команды (опционально)
                          // Валидация: 1-10
                          // Влияние: > 3 = 1.1
    
    integrations?: string[]; // Интеграции (опционально)
                             // Влияние: +10% за каждую
    
    [key: string]: any;   // Дополнительные опции из service.options
  };
}
```

**Response**: `200 OK`
```typescript
{
  estimate: {
    min: number;              // Минимальная стоимость (руб.)
    max: number;              // Максимальная стоимость (руб.)
    currency: string;         // Валюта (RUB)
  };
  
  explanation: {              // Пояснение расчета
    basePrice: number;        // Базовая цена (с учетом демпинга)
    complexityMultiplier: number;    // Коэффициент сложности
    timelineMultiplier: number;      // Коэффициент срочности
    teamSizeMultiplier: number;      // Коэффициент команды
    integrationsMultiplier: number;  // Коэффициент интеграций
    totalMultiplier: number;         // Итоговый коэффициент
  };
  
  breakdown: Array<{          // Детализация
    item: string;             // Название позиции
    price: number;            // Стоимость (руб.)
  }>;
}
```

**Example Response**:
```json
{
  "estimate": {
    "min": 450000,
    "max": 600000,
    "currency": "RUB"
  },
  "explanation": {
    "basePrice": 300000,
    "complexityMultiplier": 1.2,
    "timelineMultiplier": 1.3,
    "teamSizeMultiplier": 1.0,
    "integrationsMultiplier": 1.1,
    "totalMultiplier": 1.716
  },
  "breakdown": [
    { "item": "Базовая разработка", "price": 300000 },
    { "item": "Средняя сложность (+20%)", "price": 60000 },
    { "item": "Срочность (+30%)", "price": 90000 },
    { "item": "Интеграции (+10%)", "price": 30000 }
  ]
}
```

**Errors**:
- `400 Bad Request` - Неверный формат параметров
- `404 Not Found` - Услуга не найдена
- `422 Unprocessable Entity` - Ошибка валидации опций

---

## Типы данных

### Статусы заказов (Order Status)
```typescript
type OrderStatus = 
  | "new"          // Новый заказ
  | "discovery"    // Изучение требований
  | "proposal"     // Подготовка предложения
  | "in_progress"  // В работе
  | "review"       // На проверке
  | "done"         // Завершен
  | "archived"     // Архивирован
  | "lost";        // Потерян
```

### Роли пользователей (User Role)
```typescript
type UserRole = 
  | "guest"      // Гость (только просмотр)
  | "client"     // Клиент
  | "manager"    // Менеджер
  | "engineer"   // Инженер/Эксперт
  | "admin"      // Администратор
  | "finance";   // Финансовый отдел
```

### Приоритеты заказов (Order Priority)
```typescript
type OrderPriority = 1 | 2 | 3;  // 1-высокий, 2-средний, 3-низкий
```

### Теги сообщений (Message Tags)
```typescript
type MessageTag = 
  | "urgent"   // Срочно
  | "finance"  // Финансовые вопросы
  | "scope"    // Изменение объема работ
  | "legal";   // Правовые вопросы
```

### Статусы счетов (Invoice Status)
```typescript
type InvoiceStatus = 
  | "draft"    // Черновик
  | "issued"   // Выставлен
  | "paid"     // Оплачен
  | "void";    // Аннулирован
```

### Категории услуг (Service Category)
```typescript
type ServiceCategory = 
  | "infrastructure"  // IT-инфраструктура
  | "telephony"       // IP-телефония
  | "compliance"      // Соответствие регуляторам
  | "development"     // Разработка ПО
  | "security"        // Системы безопасности
  | "devops"          // DevOps
  | "audit"           // Аудит IT/ИБ
  | "ai";             // ИИ и BI системы
```

---

## Коды ошибок

### 400 Bad Request
Неверный формат запроса или параметров

**Example Response**:
```json
{
  "error": "Bad Request",
  "message": "Invalid request format",
  "statusCode": 400
}
```

### 401 Unauthorized
Не авторизован (отсутствует или невалидный токен)

**Example Response**:
```json
{
  "error": "Unauthorized",
  "message": "Authentication required",
  "statusCode": 401
}
```

### 403 Forbidden
Доступ запрещен (недостаточно прав)

**Example Response**:
```json
{
  "error": "Forbidden",
  "message": "You don't have permission to access this resource",
  "statusCode": 403
}
```

### 404 Not Found
Ресурс не найден

**Example Response**:
```json
{
  "error": "Not Found",
  "message": "Resource not found",
  "statusCode": 404
}
```

### 409 Conflict
Конфликт (например, email уже существует)

**Example Response**:
```json
{
  "error": "Conflict",
  "message": "Email already exists",
  "statusCode": 409
}
```

### 413 Payload Too Large
Слишком большой размер запроса

**Example Response**:
```json
{
  "error": "Payload Too Large",
  "message": "File size exceeds maximum allowed size of 50MB",
  "statusCode": 413
}
```

### 415 Unsupported Media Type
Неподдерживаемый тип медиа

**Example Response**:
```json
{
  "error": "Unsupported Media Type",
  "message": "File type not allowed",
  "statusCode": 415
}
```

### 422 Unprocessable Entity
Ошибка валидации данных

**Example Response**:
```json
{
  "error": "Unprocessable Entity",
  "message": "Validation failed",
  "statusCode": 422,
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "password",
      "message": "Password must be at least 8 characters"
    }
  ]
}
```

### 500 Internal Server Error
Внутренняя ошибка сервера

**Example Response**:
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "statusCode": 500
}
```

### 501 Not Implemented
Функциональность еще не реализована

**Example Response**:
```json
{
  "error": "Not Implemented",
  "message": "This endpoint is not yet implemented",
  "statusCode": 501
}
```

---

## Примечания

### Даты и время
Все даты возвращаются в формате ISO 8601:
```
2025-10-20T09:00:00.000Z
```

### Пагинация
Для пагинации используется либо page/limit (offset-based), либо cursor-based пагинация:

**Offset-based** (для Orders, Files):
```
?page=1&limit=20
```

**Cursor-based** (для Messages):
```
?cursor=507f1f77bcf86cd799439011&limit=50
```

### MongoDB ObjectId
Все ID являются MongoDB ObjectId формата:
```
507f1f77bcf86cd799439011
```

Длина: 24 символа (hex)

### Валидация
Все поля валидируются на backend с использованием `class-validator`.
Ошибки валидации возвращаются в формате `422 Unprocessable Entity`.

### Rate Limiting
API имеет лимиты:
- 100 запросов в минуту для авторизованных пользователей
- 20 запросов в минуту для неавторизованных

При превышении возвращается `429 Too Many Requests`.


