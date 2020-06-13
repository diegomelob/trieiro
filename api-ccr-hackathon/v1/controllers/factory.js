'use strict';

const covidController = require('./covidController');

module.exports = (adapters, errorHandler) => ({
  covid: covidController(
    adapters,
    errorHandler,
  ).covid,

});
