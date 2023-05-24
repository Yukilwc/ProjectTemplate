FROM node:20-alpine as builder

WORKDIR /app

COPY package.json ./

# 宿主机环境不一致，不能使用宿主的node_modules，必须使用容器内的
RUN npm --registry https://registry.npm.taobao.org install 

CMD ["npm","run","dev"]