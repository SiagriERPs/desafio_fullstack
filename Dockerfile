FROM node:16.13.2-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node 

EXPOSE 3000

CMD ["node", "src/index.js"]