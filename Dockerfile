FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate && npm run build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "build/index.js"]