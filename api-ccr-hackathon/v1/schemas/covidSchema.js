'use strict';

const Joi = require('joi');

module.exports = {
    request: {
        lat: Joi.string(),
        lng: Joi.string(),
      },
};