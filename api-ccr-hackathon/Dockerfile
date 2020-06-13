FROM node:10.0.0

COPY ./ /app

RUN cd /app \
	&& npm install

WORKDIR /app

CMD ["npm", "start"]
