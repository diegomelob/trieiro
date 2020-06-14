'use strict';

const serviceCovid = require('./covid');

module.exports = dependencies => ({
    serviceCovid: serviceCovid(dependencies),
});