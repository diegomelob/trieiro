'use strict';

const covidWrapper = require('./covid');

module.exports = dependencies => ({

  covid: covidWrapper({
    errorHandler: dependencies.errorHandler,
    logger: dependencies.logger,
    config: dependencies.config,
  }).covid

});
