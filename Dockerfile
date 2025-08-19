# syntax=docker/dockerfile:1

# Lightweight Node.js base image
FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies first (leverage Docker layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY . .

# Set environment
ENV NODE_ENV=production \
    PORT=5174

# Expose the service port
EXPOSE 5174

# Run the server
CMD ["node", "index.js"]

