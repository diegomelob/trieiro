'use strict';

const Joi = require('joi');

module.exports = {
    covidRequest: {
        uf: Joi.string(),
      },
};