'use strict';

const covidWrapper = require('./covid');
const prfWrapper = require('./prf');

module.exports = dependencies => ({

  covid: covidWrapper({
    mongoDb: dependencies.mongoDb,
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
