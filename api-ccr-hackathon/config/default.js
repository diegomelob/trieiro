'use strict';

require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT,
    httpsPort: process.env.HTTPS_PORT,
  },
  logger: {
    name: process.env.SERVICE_NAME,
    host: process.env.ELASTIC_SEARCH_LOG_HOST,
    index: process.env.ELASTIC_SEARCH_LOG_INDEX,
    type: process.env.ELASTIC_SEARCH_LOG_TYPE,
  },
  service: {
    uriCovid: process.env.SERVICE_COVID,
  },
  db: {
    mongoDB: {
      uri: process.env.MONGO_URI,
      base: process.env.MONGO_DATABASE,
    },
  }
};
