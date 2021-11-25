# pull official base image
FROM node:15.5.1-alpine

# set working directory
WORKDIR /app

# add app
COPY . ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install FRONTEND dependencies
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# install BACKEND dependencies
WORKDIR /app/backend
RUN npm install

# start app
CMD ["npm", "start"]