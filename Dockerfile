
# ---------- Build Stage ----------
FROM node:20-alpine AS builder

# Add a non-root user (better security practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Install dependencies first → better layer caching
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Copy source code
COPY . .

# Build the app (vite usually outputs to /dist)
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine-slim

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy built artifacts from builder stage
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

### Optional: custom nginx config (recommended for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Healthcheck (optional but very useful in production)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Run as non-root
USER nginx

CMD ["nginx", "-g", "daemon off;"]
