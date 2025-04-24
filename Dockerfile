# Build stage
FROM node:22.14-alpine AS build

WORKDIR /app


COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

# Production stage
FROM node:22.14-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package.json package-lock.json* ./
RUN npm ci --only=production --legacy-peer-deps && \
    npm cache clean --force

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

RUN npx prisma generate

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

CMD ["sh", "-c", "npx prisma db push && npm start"]