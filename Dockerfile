# Step 1: Use a Node.js image to build the React app
FROM node:16-alpine AS build

# Set the working directory inside the container
WORKDIR /portfolio-site

# Copy package.json and package-lock.json (if present)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx to serve the React app
FROM nginx:alpine

# Copy the build folder from the previous step to the Nginx container
COPY --from=build /portfolio-site/build /usr/share/nginx/html

# Expose port 80, as NGINX serves on port 80 internally
EXPOSE 80

# Start Nginx in the foreground to serve the app
CMD ["nginx", "-g", "daemon off;"]
