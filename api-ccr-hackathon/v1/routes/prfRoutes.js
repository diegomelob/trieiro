'use strict';

const controller = require('../controllers');
const { prfSchema } = require('../schemas');

const getPontos = {
  path: '/v1/pontos',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.prf,
    validate: {
      options: {
        allowUnknown: true,
      },
      query: {
        uf: prfSchema.prfRequestPontos.uf,
        municipio: prfSchema.prfRequestPontos.municipio,
        categoria: prfSchema.prfRequestPontos.categoria,
        rodovia: prfSchema.prfRequestPontos.rodovia,
        latitude: prfSchema.prfRequestPontos.lat,
        longitude: prfSchema.prfRequestPontos.lng,
      },
    },
  },
};

module.exports = {
  getPontos,
};
