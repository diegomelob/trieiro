'use strict';

const Joi = require('joi');

module.exports = {
    prfRequestPontos: {
        uf: Joi.string(),
        municipio: Joi.string(),
        categoria: Joi.string(),
        rodovia: Joi.string(),
        lat: Joi.string(),
        lng: Joi.string(),
      },
};