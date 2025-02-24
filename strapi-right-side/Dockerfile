# Stage 1: Build
FROM node:20-alpine AS build

RUN apk update && apk add --no-cache \
    build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:20-alpine

RUN apk add --no-cache vips-dev

WORKDIR /opt/app

COPY --from=build /opt/app ./
RUN chown -R node:node /opt/app
USER node

ENV NODE_ENV=production
EXPOSE 1337

CMD ["npm", "run", "start"]