# Build stage
FROM node:20-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
# We'll mount the dist folder outside container
VOLUME /app/dist