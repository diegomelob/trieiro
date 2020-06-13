'use strict';

const controller = require('../controllers');
const { covidSchema } = require('../schemas');

const getCovid = {
  path: '/v1/covid',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.covid,
    validate: {
      options: {
        allowUnknown: true,
      },
      query: covidSchema.covidRequest.uf,
    },
  },
};

module.exports = {
  getCovid,
};
