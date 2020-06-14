'use strict';

const covidController = require('./covidController');
const prfController = require('./prfController');

module.exports = adapters => ({
  covid: covidController(adapters).covid,
  prf: prfController(adapters).prf,
});
