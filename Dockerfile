# Use a base image with Node.js
FROM node:18-alpine

# Set up a working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other application files
COPY . .

# Build the application
RUN npm run build

# Use a base image with nginx to serve static files
FROM nginx:alpine

# Copy the built application to the NGINX directory for static files
COPY --from=0 /app/build /usr/share/nginx/html

# Open port 80 to access the application
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]