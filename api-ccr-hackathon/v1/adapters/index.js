'use strict';

const covidWrapper = require('./covid');
const prfWrapper = require('./prf');
const covidMapper = require('./mapper/covid');

module.exports = dependencies => ({

  covid: covidWrapper({
    mongoDb: dependencies.mongoDb,
    logger: dependencies.logger,
    config: dependencies.config,
    services: dependencies.services,
    covidMapper: covidMapper,
  }).covid,

  prf: prfWrapper({
    mongoDb: dependencies.mongoDb,
    logger: dependencies.logger,
    config: dependencies.config,
    services: dependencies.services,
  }).prf,
});
