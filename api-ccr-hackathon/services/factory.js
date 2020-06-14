'use strict';

const serviceCovid = require('./covid');
const servicePrf = require('./prf');

module.exports = dependencies => ({
    serviceCovid: serviceCovid(dependencies),
    servicePrf: servicePrf(dependencies),
});