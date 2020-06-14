'use strict';

const covidController = require('./covidController');

module.exports = adapters => ({
  covid: covidController(adapters).covid,
});
