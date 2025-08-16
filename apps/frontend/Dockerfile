# ===========================================
# Development stage
# ===========================================
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy application code
COPY . .

# Set working directory to frontend
WORKDIR /app/apps/frontend

# Expose port for development server
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ===========================================
# Build stage
# ===========================================
FROM development AS build

WORKDIR /app/apps/frontend

# Build the application
RUN npm run build

# ===========================================
# Production stage
# ===========================================
FROM nginx:alpine AS production

# Copy built assets from build stage
COPY --from=build /app/apps/frontend/build /usr/share/nginx/html

# Copy nginx config
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for nginx
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
