# build environment
FROM node AS build
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL='/'
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
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]