'use strict';

const Joi = require('joi');

module.exports = {
    covidRequestMunicipios: {
        uf: Joi.string(),
      },
};