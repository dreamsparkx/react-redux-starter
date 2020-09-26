FROM node
WORKDIR /usr/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]