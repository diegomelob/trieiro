'use strict';

const factory = require('./factory');
const config = require('../../config');
const errorHandler       = require('../../commons/utils/errorHandler');
const logger             = require('../../commons/lib/logger');

const adapters = require('../adapters')({
  logger,
  errorHandler,
  config,
});

module.exports = factory(adapters, errorHandler);
