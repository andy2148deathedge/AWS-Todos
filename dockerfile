FROM node:16

ADD . /aws-todos
WORKDIR /aws-todos
RUN npm install

CMD npm run dev