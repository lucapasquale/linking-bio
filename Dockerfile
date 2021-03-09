# ---- Base Stage ----
FROM node:12-buster-slim AS base

RUN apt-get update && apt-get install --no-install-recommends --yes openssl

WORKDIR /app


# ---- Application Stage ----
FROM base AS final
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY packages/backend/*.json ./packages/backend/

RUN yarn install --pure-lockfile

COPY packages/backend/ ./packages/backend/

RUN yarn workspace backend build

CMD ["node", "packages/backend/dist/main.js"]
