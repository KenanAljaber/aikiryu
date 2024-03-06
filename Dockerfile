# Stage 1: Build the application
FROM node:17-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

RUN npm install

COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
