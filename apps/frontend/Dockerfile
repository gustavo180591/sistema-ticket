# ===========================================
# Development stage
# ===========================================
FROM node:20-alpine AS development

WORKDIR /app

# Copiamos el package.json global y lockfiles
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

WORKDIR /app/apps/frontend

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# ===========================================
# Build stage
# ===========================================
FROM development AS build

WORKDIR /app/apps/frontend

RUN npm run build

# ===========================================
# Production stage
# ===========================================
FROM nginx:alpine AS production

COPY --from=build /app/apps/frontend/build /usr/share/nginx/html
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
