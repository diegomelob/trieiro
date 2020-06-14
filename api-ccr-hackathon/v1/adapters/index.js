'use strict';

const covidWrapper = require('./covid');

module.exports = dependencies => ({

  covid: covidWrapper({
    logger: dependencies.logger,
    config: dependencies.config,
    services: dependencies.services,
  }).covid,

});
