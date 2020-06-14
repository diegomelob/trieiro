'use strict';

const { getCovid } = require('./routes');
const { getPontos } = require('./prfRoutes');

module.exports = [
  getCovid,
  getPontos
];
