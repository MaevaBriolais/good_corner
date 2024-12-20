#Dockerfile backend

FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY src/ src/
COPY wild.sqlite ./


CMD ["npm", "start"]