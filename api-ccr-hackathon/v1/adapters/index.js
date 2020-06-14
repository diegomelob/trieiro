'use strict';

const covidWrapper = require('./covid');
const prfWrapper = require('./prf');

module.exports = dependencies => ({

  covid: covidWrapper({
    logger: dependencies.logger,
    config: dependencies.config,
    services: dependencies.services,
  }).covid,

  prf: prfWrapper({
    logger: dependencies.logger,
    config: dependencies.config,
    services: dependencies.services,
  }).prf,
});
