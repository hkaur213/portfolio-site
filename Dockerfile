# Step 1: Use a Node.js image to build the React app
FROM node:16-alpine AS build

# Set the working directory inside the container
WORKDIR /kaur_harleen_final_site

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
COPY --from=build /kaur_harleen_final_site/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
