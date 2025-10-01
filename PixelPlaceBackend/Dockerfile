# Use Node 20
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend source code
COPY ./src ./src

# Expose the port the app runs on
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]
