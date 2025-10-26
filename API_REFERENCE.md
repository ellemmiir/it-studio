# API Reference - IT Studio Platform

## Базовый URL
```
http://localhost:3001/api/v1
```

## 📊 Статистика
- **Всего endpoints:** 46
- **Модулей:** 11 (Auth, Users, Services, Orders, Messages, Threads, Files, Invoices, Companies, Settings, Reports)
- **Схем MongoDB:** 8 (User, Company, Service, Order, Thread, Message, Invoice, File)

## Аутентификация
Все защищенные endpoints требуют заголовок:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 1. Аутентификация (Auth)

### POST /auth/register
**Регистрация нового пользователя**

**Запрос:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "client",
  "profile": {
    "firstName": "Иван",
    "lastName": "Иванов",
    "companyId": "company_id",
    "timezone": "Europe/Moscow",
    "locale": "ru"
  }
}
```

**Ответ:**
```json
{
  "access_token": "eyJhbGci...",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "role": "client"
  }
}
```

**Роли:** `client`, `manager`, `admin`, `finance`, `engineer`

---

### POST /auth/login
**Вход в систему**

**Запрос:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Ответ:**
```json
{
  "access_token": "eyJhbGci...",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "role": "client"
  }
}
```

---

### POST /auth/profile
**Получение профиля текущего пользователя**
- **Требует JWT**

**Ответ:**
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "role": "client",
  "profile": {
    "firstName": "Иван",
    "lastName": "Иванов"
  }
}
```

---

## 2. Пользователи (Users)

### GET /users
**Получить список всех пользователей**
- **Требует JWT**

**Ответ:**
```json
[
  {
    "_id": "user_id",
    "email": "user@example.com",
    "role": "client",
    "status": "active",
    "profile": {...},
    "createdAt": "2025-10-25T13:11:35.723Z"
  }
]
```

---

### GET /users/:id
**Получить пользователя по ID**
- **Требует JWT**

**Ответ:**
```json
{
  "_id": "user_id",
  "email": "user@example.com",
  "role": "client",
  "status": "active"
}
```

---

### PUT /users/:id
**Обновить пользователя**
- **Требует JWT**

**Запрос:**
```json
{
  "profile": {
    "firstName": "Новое Имя"
  }
}
```

---

### DELETE /users/:id
**Удалить пользователя**
- **Требует JWT**

---

## 3. Услуги (Services)

### GET /services
**Получить список всех активных услуг**
- **Публичный endpoint**

**Ответ:**
```json
[
  {
    "_id": "service_id",
    "slug": "development",
    "title": "Разработка ПО",
    "category": "Development",
    "description": "Разработка веб-приложений",
    "features": ["feature1", "feature2"],
    "marketPriceRange": {
      "min": 100000,
      "max": 500000
    },
    "priceDump": {
      "min": 80000,
      "max": 400000,
      "activeUntil": "2025-12-31T00:00:00.000Z"
    },
    "pricePostDump": {
      "min": 120000,
      "max": 600000
    },
    "options": [...],
    "isActive": true
  }
]
```

---

### GET /services/:id
**Получить услугу по ID**
- **Публичный endpoint**

---

### POST /services/calc/:id
**Рассчитать стоимость услуги**
- **Публичный endpoint**

**Запрос:**
```json
{
  "complexity": "high",
  "urgency": "normal"
}
```

**Ответ:**
```json
{
  "min": 80000,
  "max": 400000,
  "explanation": "Демпинговая цена действует до 2025-12-31"
}
```

---

### POST /services
**Создать новую услугу**
- **Требует JWT (Admin)**

**Запрос:**
```json
{
  "slug": "devops",
  "title": "DevOps-услуги",
  "category": "DevOps",
  "description": "Настройка CI/CD",
  "marketPriceRange": {"min": 50000, "max": 200000},
  "priceDump": {"min": 40000, "max": 160000, "activeUntil": "2025-12-31"},
  "pricePostDump": {"min": 60000, "max": 240000},
  "isActive": true
}
```

---

### PUT /services/:id
**Обновить услугу**
- **Требует JWT (Admin)**

---

### DELETE /services/:id
**Удалить услугу**
- **Требует JWT (Admin)**

---

## 4. Заказы (Orders)

### GET /orders
**Получить список заказов**
- **Требует JWT**

**Query параметры:**
- `status` - фильтр по статусу
- `mine` - только мои заказы

**Ответ:**
```json
[
  {
    "_id": "order_id",
    "clientId": "user_id",
    "serviceId": "service_id",
    "title": "Разработка сайта",
    "status": "new",
    "priority": 2,
    "brief": {...},
    "estimate": {...},
    "assignedTo": "manager_id",
    "timeline": [...],
    "createdAt": "2025-10-25T13:13:53.592Z"
  }
]
```

**Статусы:** `new`, `discovery`, `proposal`, `in_progress`, `review`, `done`, `archived`, `lost`

---

### GET /orders/:id
**Получить заказ по ID**
- **Требует JWT**

---

### POST /orders
**Создать новый заказ**
- **Требует JWT**
- **clientId подставляется автоматически из JWT**

**Запрос:**
```json
{
  "serviceId": "service_id",
  "title": "Разработка лендинга",
  "brief": {
    "answers": {
      "type": "landing",
      "features": ["adaptive", "modern"]
    }
  },
  "status": "new"
}
```

**Ответ:**
```json
{
  "_id": "order_id",
  "clientId": "user_id",
  "serviceId": "service_id",
  "title": "Разработка лендинга",
  "status": "new",
  "priority": 2,
  "createdAt": "2025-10-25T13:13:53.592Z"
}
```

---

### PUT /orders/:id
**Обновить заказ**
- **Требует JWT**

**Запрос:**
```json
{
  "status": "discovery",
  "assignedTo": "manager_id"
}
```

---

### PUT /orders/:id/status
**Изменить статус заказа**
- **Требует JWT**

**Запрос:**
```json
{
  "status": "in_progress"
}
```

---

### DELETE /orders/:id
**Удалить заказ**
- **Требует JWT**

---

## 5. Сообщения (Messages)

### GET /messages/thread/:threadId
**Получить сообщения треда**
- **Требует JWT**

**Query параметры:**
- `cursor` - пагинация (ID последнего сообщения)

**Ответ:**
```json
[
  {
    "_id": "message_id",
    "threadId": "thread_id",
    "orderId": "order_id",
    "fromUserId": "user_id",
    "type": "text",
    "text": "Привет! Тестовое сообщение",
    "files": ["file_id1", "file_id2"],
    "meta": {
      "tags": ["urgent"],
      "quotedMessageId": "prev_message_id"
    },
    "readBy": ["user_id1"],
    "createdAt": "2025-10-25T13:20:00.000Z"
  }
]
```

**Типы сообщений:** `text`, `file`, `system`, `quote`, `checklist`, `code`

---

### POST /messages
**Создать сообщение**
- **Требует JWT**

**Запрос:**
```json
{
  "threadId": "thread_id",
  "orderId": "order_id",
  "type": "text",
  "text": "Привет! Тестовое сообщение",
  "fromUserId": "user_id"
}
```

**Ответ:**
```json
{
  "_id": "message_id",
  "threadId": "thread_id",
  "type": "text",
  "text": "Привет! Тестовое сообщение",
  "createdAt": "2025-10-25T13:20:00.000Z"
}
```

---

### POST /messages/:id/read
**Отметить сообщение как прочитанное**
- **Требует JWT**

**Запрос:**
```json
{
  "userId": "user_id"
}
```

---

## 6. Треды (Threads)

### GET /threads/:ownerType/:ownerId
**Получить или создать тред**
- **Требует JWT**

**Параметры:**
- `ownerType`: `order`, `lead`, `support`
- `ownerId`: ID владельца треда

**Ответ:**
```json
{
  "_id": "thread_id",
  "ownerType": "order",
  "ownerId": "order_id",
  "lastMessageAt": "2025-10-25T13:20:00.000Z",
  "participants": ["user_id1", "user_id2"]
}
```

---

## 7. Треды (Threads)

### GET /threads/:ownerType/:ownerId
**Получить или создать тред**
- **Требует JWT**

**Параметры:**
- `ownerType`: `order`, `lead`, `support`
- `ownerId`: ID владельца треда

**Запрос (тело):**
```json
{
  "participants": ["user_id1", "user_id2"]
}
```

**Ответ:**
```json
{
  "_id": "thread_id",
  "ownerType": "order",
  "ownerId": "order_id",
  "lastMessageAt": "2025-10-25T13:20:00.000Z",
  "participants": ["user_id1", "user_id2"]
}
```

---

## 8. Файлы (Files)

### POST /files
**Загрузить файл**
- **Требует JWT**
- **Content-Type:** multipart/form-data

**Запрос:**
- Form field: `file` (File)

**Ответ:**
```json
{
  "_id": "file_id",
  "filename": "document.pdf",
  "size": 12345,
  "mime": "application/pdf",
  "url": "http://minio:9000/it-studio-files/timestamp-document.pdf",
  "ownerId": "user_id",
  "virusScanned": true
}
```

---

### GET /files/:id
**Получить файл по ID**
- **Требует JWT**

---

### DELETE /files/:id
**Удалить файл**
- **Требует JWT**

---

## 9. Счета (Invoices)

### GET /invoices
**Получить список счетов**
- **Требует JWT**

**Query параметры:**
- `orderId` - фильтр по заказу

**Ответ:**
```json
[
  {
    "_id": "invoice_id",
    "orderId": "order_id",
    "number": "INV-000001",
    "amount": 100000,
    "currency": "RUB",
    "status": "draft",
    "issuedAt": null,
    "paidAt": null
  }
]
```

**Статусы:** `draft`, `issued`, `paid`, `void`

---

### GET /invoices/:id
**Получить счет по ID**
- **Требует JWT**

---

### POST /invoices
**Создать счет**
- **Требует JWT**

**Запрос:**
```json
{
  "orderId": "order_id",
  "amount": 100000,
  "currency": "RUB"
}
```

**Ответ:**
```json
{
  "_id": "invoice_id",
  "orderId": "order_id",
  "number": "INV-000001",
  "amount": 100000,
  "status": "draft"
}
```

---

### PUT /invoices/:id
**Обновить счет**
- **Требует JWT**

---

### PUT /invoices/:id/issue
**Выставить счет**
- **Требует JWT**

**Ответ:**
```json
{
  "_id": "invoice_id",
  "status": "issued",
  "issuedAt": "2025-10-26T10:30:00.000Z"
}
```

---

### PUT /invoices/:id/paid
**Отметить счет как оплаченный**
- **Требует JWT**

**Ответ:**
```json
{
  "_id": "invoice_id",
  "status": "paid",
  "paidAt": "2025-10-26T10:30:00.000Z"
}
```

---

### DELETE /invoices/:id
**Удалить счет**
- **Требует JWT**

---

## 10. Компании (Companies)

### GET /companies
**Получить список компаний**
- **Требует JWT**

**Ответ:**
```json
[
  {
    "_id": "company_id",
    "name": "ООО Рога и Копыта",
    "inn": "1234567890",
    "kpp": "987654321",
    "ogrn": "1234567890123",
    "address": "г. Москва, ул. Примерная, д. 1",
    "billing": {
      "bank": "ПАО Сбербанк",
      "bik": "044525225",
      "account": "40702810123456789012",
      "correspondentAccount": "30101810400000000225"
    }
  }
]
```

---

### GET /companies/:id
**Получить компанию по ID**
- **Требует JWT**

---

### POST /companies
**Создать компанию**
- **Требует JWT**

**Запрос:**
```json
{
  "name": "ООО Рога и Копыта",
  "inn": "1234567890",
  "kpp": "987654321",
  "ogrn": "1234567890123",
  "address": "г. Москва, ул. Примерная, д. 1",
  "billing": {
    "bank": "ПАО Сбербанк",
    "bik": "044525225",
    "account": "40702810123456789012"
  }
}
```

---

### PUT /companies/:id
**Обновить компанию**
- **Требует JWT**

---

### DELETE /companies/:id
**Удалить компанию**
- **Требует JWT**

---

## 11. Настройки (Settings)

### GET /settings
**Получить все настройки**
- **Требует JWT**

**Ответ:**
```json
{
  "branding": {
    "companyName": "IT Studio",
    "logo": "",
    "primaryColor": "#0066CC",
    "secondaryColor": "#00CC66"
  },
  "email": {
    "smtpHost": "smtp.gmail.com",
    "smtpPort": 587,
    "fromAddress": "noreply@itstudio.ru"
  },
  "security": {
    "jwtExpiration": "1h",
    "passwordMinLength": 8,
    "require2FA": false
  },
  "features": {
    "enableChat": true,
    "enableOnlinePayments": false,
    "enableTelegramBot": false
  },
  "sla": {
    "newOrderResponseTime": 15,
    "discoveryResponseTime": 120,
    "inProgressResponseTime": 240
  }
}
```

---

### PUT /settings
**Обновить настройки**
- **Требует JWT**

---

### GET /settings/branding
**Получить настройки брендинга**
- **Требует JWT**

---

### PUT /settings/branding
**Обновить настройки брендинга**
- **Требует JWT**

**Запрос:**
```json
{
  "companyName": "Новое название",
  "primaryColor": "#FF0000"
}
```

---

## 12. Отчеты (Reports)

### GET /reports/orders
**Отчет по заказам**
- **Требует JWT**

**Query параметры:**
- `status` - фильтр по статусу

**Ответ:**
```json
{
  "total": 25,
  "byStatus": {
    "new": 5,
    "in_progress": 10,
    "done": 8,
    "archived": 2
  },
  "byPriority": {
    "1": 2,
    "2": 15,
    "3": 8
  },
  "avgResponseTime": 0
}
```

---

### GET /reports/revenue
**Отчет по выручке**
- **Требует JWT**

**Query параметры:**
- `from` - дата начала (ISO 8601)
- `to` - дата окончания (ISO 8601)

**Ответ:**
```json
{
  "totalRevenue": 80000,
  "totalInvoices": 1,
  "avgInvoice": 80000,
  "period": "all"
}
```

---

### GET /reports/sla
**Отчет по SLA**
- **Требует JWT**

**Ответ:**
```json
{
  "newOrders": 5,
  "inProgress": 10,
  "done": 8,
  "avgCompletionTime": 0
}
```

---

### GET /reports/services
**Отчет по услугам**
- **Требует JWT**

**Ответ:**
```json
[
  {
    "serviceId": "service_id",
    "serviceName": "Разработка ПО",
    "ordersCount": 15,
    "revenue": 0
  }
]
```

### Настройки (Settings)
- `GET /settings` - Получить настройки
- `PUT /settings` - Обновить настройки

---

## Коды ответов

- `200 OK` - Успешный запрос
- `201 Created` - Ресурс создан
- `400 Bad Request` - Некорректный запрос
- `401 Unauthorized` - Не авторизован
- `403 Forbidden` - Нет доступа
- `404 Not Found` - Ресурс не найден
- `500 Internal Server Error` - Ошибка сервера

---

## Примеры использования

### Создание заказа с последующим созданием сообщения

```bash
# 1. Регистрация
TOKEN=$(curl -X POST http://localhost:3001/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123","role":"client"}' \
  | jq -r '.access_token')

# 2. Создание заказа
curl -X POST http://localhost:3001/api/v1/orders \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"serviceId":"service_id","title":"Новый заказ","status":"new"}'

# 3. Создание сообщения в треде
curl -X POST http://localhost:3001/api/v1/messages \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"threadId":"thread_id","type":"text","text":"Привет!"}'
```

---

**Версия:** 0.1.0  
**Дата:** 2025-10-25
