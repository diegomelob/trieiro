'use strict';

const factory = require('./factory');

const state = {
  mongoDb: null,
};

const wrapper = factory(state);

module.exports = wrapper;
