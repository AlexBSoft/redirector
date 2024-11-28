# Use the official Node.js 20 alpine image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package.json package-lock.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript files (optional if you want to compile TS to JS)
# RUN npm run build (if you have a build script in package.json)

# Expose the port that the app runs on
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]