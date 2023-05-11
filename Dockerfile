FROM node:alpine

RUN apk update
RUN apk upgrade
RUN apk add git

ENV WORKING_DIR="/usr/app"
# ENV PORT=4001

WORKDIR ${WORKING_DIR}

COPY tic-tac-toe/package*.json ./

RUN cd tic-tac-toe
RUN npm install

COPY . .

# EXPOSE ${PORT}

CMD ["npm run dev"]
