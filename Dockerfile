FROM node:latest as builder

WORKDIR /src
COPY ./ /src

RUN npm install --location=global pnpm \
    && pnpm install \
    && pnpm build

FROM nginx:alpine-slim

RUN mkdir /usr/share/nginx/front \
    && mkdir /usr/share/nginx/front/dist \
    && rm -rf /etc/nginx/nginx.conf

COPY --from=builder /src/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /src/dist /usr/share/nginx/front/dist

EXPOSE 80
