'use strict';

const errorMessages = {
  PAYLOAD_NOT_FOUND: 'Payload not found in request data',
  HEADERS_CONSUMER_SYSTEM: 'Unauthorized x-consumer-system value in header',
  ERROR_PACKAGE_V1: 'Failed packageV1',
  ERROR_REMOVE_CACHE: 'Failed removeCache',
  ERROR_UPDATE_CACHE: 'Failed updateCache',
};

const genericError = errorData => ({
  fail: true,
  status_code: errorData.code,
  error: {
    message: errorData.message,
    // details: errorData.details,
  },
});

const genericSuccess = data => ({
  statusCode: 200,
  body: JSON.stringify(data),
});

const genericSuccessObject = (headers, payload, response) => ({
  code: 200,
  // headers: headers,
  message: 'Success',
  body: payload,
  responseObject: response,
});

const genericErrorObject = (headers, payload, error) => ({
  code: error && error.isBoom ? error.output.statusCode : 500,
  headers: headers,
  message: error.message,
  body: payload,
  responseObject: error,
});

module.exports = {
  genericError,
  errorMessages,
  genericSuccess,
  genericSuccessObject,
  genericErrorObject,
};
