FROM node:20-alpine
COPY ./ /app
WORKDIR /app
RUN corepack enable
RUN pnpm install
RUN pnpm run build

FROM nginx:stable-alpine
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
