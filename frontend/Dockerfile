FROM node:22.3.0-alpine AS build

WORKDIR /app

# Clear npm cache
RUN npm cache clean --force

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build Angular app for production
RUN ng build --configuration=production

# Stage 2: Setup Nginx to serve Angular app
FROM nginx:latest AS nginx

# Copy build output from the 'build' stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]