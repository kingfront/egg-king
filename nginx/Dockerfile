# 指定基础镜像，必备的指令，并且必须是第一条指令
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
# FROM nginx:alpine
# 表示空白的镜像，不依赖其它镜像
#FROM scratch
# RUN echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html

# 国内源
# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories
# # 安装 nginx
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache bash
# 拷贝 nginx 全局配置文件
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf
# # 启动 nginx
# CMD nginx

# 暴露 80 端口
# EXPOSE 80