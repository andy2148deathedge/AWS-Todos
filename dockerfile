FROM node:16

ADD . /aws-todos
WORKDIR /aws-todos
RUN npm install
RUN npx sequelize db:migrate
RUN npx sequelize db:seed:all

CMD npm run dev