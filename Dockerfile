FROM node:19-bullseye

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5004

CMD [ "node", "index.js" ]

