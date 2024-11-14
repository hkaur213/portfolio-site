# Step 1: Use a Node.js image to build the React app
FROM node:16-alpine AS build

# Set the working directory inside the container to 'Kaur_Harleen_final_site'
WORKDIR /kaur_harleen_final_site

# Copy package.json and package-lock.json (if present)
COPY package.json package-lock.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use a Node.js image to serve the app with 'serve'
FROM node:16-alpine

# Set the working directory inside the container to 'Kaur_Harleen_final_site'
WORKDIR /kaur_harleen_final_site

# Install 'serve' globally to serve the build folder
RUN npm install -g serve

# Copy the build folder from the previous step to the container
COPY --from=build /kaur_harleen_final_site/build /kaur_harleen_final_site/build

# Expose port 5575 (the port the container will use)
EXPOSE 5575

# Start the 'serve' command to serve the app
CMD ["serve", "-s", "build", "-l", "5575"]
