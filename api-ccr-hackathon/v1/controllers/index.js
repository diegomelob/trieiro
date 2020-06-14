'use strict';

const factory = require('./factory');
const config = require('../../config');
const services = require('../../services');
const mongoDb = require('../../commons/mongoDb');

const adapters = require('../adapters')({
  config,
  services,
  mongoDb,
});

module.exports = factory(adapters);
