FROM node:18-alpine
WORKDIR /MYDR24-WEB
COPY package.json package-lock.json ./
RUN npm install --silent && \
    npm install react-scripts@4.0.3 -g --silent
COPY . ./
EXPOSE 5173
CMD ["npx", "vite", "preview", "--port", "5173", "--host"]