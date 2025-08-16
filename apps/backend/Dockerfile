# ===========================================
# Development stage
# ===========================================
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/backend/package.json ./apps/backend/


# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy application code
COPY . .

# Set working directory to backend
WORKDIR /app/apps/backend

# Generate Prisma client
RUN npx prisma generate

# Expose port for development server
EXPOSE 3000

# Start development server
CMD ["npm", "run", "start:dev"]

# ===========================================
# Build stage
# ===========================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/backend/package.json ./apps/backend/


# Install production dependencies only
RUN npm install -g pnpm && pnpm install --frozen-lockfile --prod

# Copy application code
COPY . .

# Set working directory to backend
WORKDIR /app/apps/backend

# Build the application
RUN npm run build

# Generate Prisma client
RUN npx prisma generate

# ===========================================
# Production stage
# ===========================================
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files and production dependencies
COPY --from=build /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/backend/package.json ./apps/backend/
COPY --from=build /app/packages/ ./packages/

# Copy built application
COPY --from=build /app/apps/backend/dist ./apps/backend/dist
COPY --from=build /app/apps/backend/prisma ./apps/backend/prisma

# Set working directory to backend
WORKDIR /app/apps/backend

# Expose port for the application
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]
