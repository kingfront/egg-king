# 依赖的node版本
FROM node:14.18.1

# 拷贝项目文件进行构建
WORKDIR /app/nodeService
COPY ./nodeService/package.json ./
RUN npm install --registry=https://registry.npm.taobao.org
# 拷贝项目文件
COPY ./nodeService/* ./
# 启动服务
CMD ["npm","run","dev"]
# 暴露 7001 端口到宿主机
EXPOSE 7001