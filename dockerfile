FROM node:14 

ADD . /aws-todos
WORKDIR /aws-todos
RUN npm install

CMD npm run dev