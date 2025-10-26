FROM node:20-alpine

# Устанавливаем необходимые системные пакеты
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    curl \
    wget

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код
COPY . .

# Билдим приложение
RUN npm run build

EXPOSE 3001

# Запускаем собранное приложение
CMD ["npm", "run", "start:prod"]
