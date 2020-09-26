# build environment
FROM node AS build
WORKDIR /usr/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# prod environment
FROM nginx:stable-alpine
COPY --from=build /usr/app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]