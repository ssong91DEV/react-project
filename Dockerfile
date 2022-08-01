FROM node:latest as builder

# 20220801
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
RUN npm run build

# nginx
FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]