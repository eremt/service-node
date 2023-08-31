FROM node:latest as base

WORKDIR /app
COPY . /app
RUN npm install

FROM base as production

RUN npm run build
EXPOSE 5000

CMD ["node", "dist/index.js"]
