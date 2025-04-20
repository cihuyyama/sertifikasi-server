# Build stage
FROM node:22.14-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

# Production stage
FROM node:22.14-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

EXPOSE 5000

RUN npx prisma generate

CMD ["sh", "-c", "npx prisma db push && npm start" ]
