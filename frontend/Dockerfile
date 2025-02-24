FROM node:20.11.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install nuxt

RUN npm run build

CMD ["node", ".output/server/index.mjs"]
