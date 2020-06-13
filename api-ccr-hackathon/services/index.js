'use strict';

const axios = require('axios');
const config = require('../config');
const factory = require('./factory');

const dependencies = {
  request: axios,
  config,
};

module.exports = factory(dependencies);
