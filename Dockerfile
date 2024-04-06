### ### ###
FROM vd_client_base:1.0 AS base

### ### ###
# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY app/package.json ./
RUN npm install
RUN npm i -D encoding

### ### ###
# 2. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY app/public ./public
COPY app/src ./src
COPY app/*.json .
COPY app/*.js .
COPY app/*.mjs .
COPY app/*.ts .

COPY --from=deps /app/node_modules ./node_modules
COPY .env .env.production

RUN npm run build

### ### ###
# 3. Production image, copy all the files and run next
FROM vd_nginx_spa:1.0 AS nginx_server

WORKDIR /app

COPY --from=builder /app/build .
