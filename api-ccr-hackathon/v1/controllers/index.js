'use strict';

const factory = require('./factory');
const config = require('../../config');
const services = require('../../services');

const adapters = require('../adapters')({
  config,
  services,
});

module.exports = factory(adapters);
