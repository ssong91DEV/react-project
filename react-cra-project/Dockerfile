
# node version 16.13.2
FROM node:16.13.2

# 작업 위치 지정
WORKDIR /app

# 환경 변수 지정
ENV PATH /app/node_modules/.bin:$PATH

# 현재 파일을 이미지의 /app 위치에 복사
COPY . /app

# package.json에 명시된 의존성 설치
RUN npm install

# 빌드 시작
RUN npm run build

# nginx
FROM nginx:latest

# builder로부터 /app/build를 복사
COPY --from=builder /app/build /usr/share/nginx/html

# 기존 환경 설정 제거
RUN rm /etc/nginx/conf.d/default.conf

# 내 디렉토리의 conf폴더 내용을 복사
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]