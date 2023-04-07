# 安装依赖与构建
FROM node:alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN set -x && npm ci --registry=https://registry.npmmirror.com
COPY . ./
RUN npm run build

# nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]