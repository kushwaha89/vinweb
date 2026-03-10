# -----------------------
#  BUILD STAGE
# -----------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first → better caching
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copy source code
COPY . .

# Build the Vite/React app
RUN npm run build

# -----------------------
#  PRODUCTION STAGE
# -----------------------
FROM nginx:alpine-slim

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files from builder stage (with correct ownership)
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Copy custom nginx configuration for SPA (important!)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create necessary directories and fix permissions so non-root user can write
# This is the key fix for the "mkdir() ... Permission denied" error
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
    && chown -R nginx:nginx /var/cache/nginx \
    && chmod -R 755 /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx \
    && touch /var/run/nginx.pid \
    && chown nginx:nginx /var/run/nginx.pid

# Expose port
EXPOSE 80

# Run as non-root user (security best practice)
USER nginx

# Healthcheck (optional but very useful in production / orchestration)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
