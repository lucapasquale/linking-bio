# ---- Build Stage ----
FROM node:12.13-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn workspace backend build

# ---- Application Stage ----
FROM node:12.13-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --only=production

COPY . .

COPY --from=build /usr/src/app/packages/backend/dist ./packages/backend/dist

CMD ["node", "packages/backend/dist/main"]
