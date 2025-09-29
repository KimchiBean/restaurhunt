    FROM node:23 AS build-frontend

    WORKDIR /app/client

    # Copy and install dependencies
    COPY client/package.json client/package-lock.json ./
    RUN npm install

    # Copy the rest of the frontend code
    COPY client/ .

    # Build the frontend
    RUN npm run build

    # --- Backend Stage: Setup Express Server ---
    FROM node:23-slim 

    WORKDIR /app/server

    # Copy backend package.json first and install deps
    COPY server/package.json server/package-lock.json ./
    RUN npm install

    # Copy backend code
    COPY server/ .

    # Copy built frontend into backend
    COPY --from=build-frontend /app/client/build ./build

    # Expose server port
    EXPOSE 8080

    # Start the server
    CMD ["node", "index.js"]
