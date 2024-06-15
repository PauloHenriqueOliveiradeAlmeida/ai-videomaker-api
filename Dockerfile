FROM node:lts-alpine
ENV NODE_ENV=develop
WORKDIR /
COPY ["package.json", "./"]
RUN npm install && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
