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
      query: {
        lat: covidSchema.request.lat,
        long: covidSchema.request.lng,
      },
    },
  },
};

module.exports = {
  getCovid,
};
