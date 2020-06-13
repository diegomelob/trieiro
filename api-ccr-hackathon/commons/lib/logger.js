'use strict';

const { genericError } = require('../utils/responseHandler');
const uuidv1 = require('uuid/v1');

// const success = async (config, data, processId, start) => {
const success = async (data) => {
  try {
    return data;
  } finally {
    /*
    Logger.sendFileV2({
      statusCode: 200,
      // headers: data.headers,
      body: JSON.stringify(data.body),
      responseObject: data,
      application: config.logger.name,
      environment: config.environment,
      message: 'Success',
      processId,
      start,
    });
    */
  }
};

// const error = async (config, err, processId, start) => {
const error = async (err) => {
  try {
    return genericError(err);
  } finally {
    /*
    Logger.sendFileV2({
      statusCode: err.code,
      // headers: err.headers,
      body: err.body ? JSON.stringify(err.body) : '',
      responseObject: JSON.stringify(err.responseObject, Object.getOwnPropertyNames(err.responseObject)),
      application: config.logger.name,
      environment: config.environment,
      message: `Error: ${err.message || 'messsage = undefined-'}`,
      processId,
      start,
    });
    */
  }
};

module.exports = (config) => {
  const processId = uuidv1();
  const start = new Date();

  return {
    onSuccess: data => success(config, data, processId, start),
    onError: err => error(config, err, processId, start),
  };
};
