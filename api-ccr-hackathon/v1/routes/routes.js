'use strict';

const controller = require('../controllers');
const { covidSchema } = require('../schemas');

const getCovid = {
  path: '/v1/covid/{uf}/municipios',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.covid,
    validate: {
      options: {
        allowUnknown: true,
      },
      params: {
        uf: covidSchema.covidRequestMunicipios.uf,
      },
    },
  },
};

module.exports = {
  getCovid,
};
