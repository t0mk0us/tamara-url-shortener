# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
ENTRYPOINT ["javascript", "app.js"]
EXPOSE 3000