# ===========================================
# Development stage
# ===========================================
FROM node:20-alpine AS development

WORKDIR /app

# Copiamos el package.json global y lockfiles
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

# Instalamos dependencias
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copiamos todo el código del repo
COPY . .

# Generamos cliente Prisma
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

# ===========================================
# Build stage
# ===========================================
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile --prod

COPY . .

RUN npm run build
RUN npx prisma generate

# ===========================================
# Production stage
# ===========================================
FROM node:20-alpine AS production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "dist/main"]
