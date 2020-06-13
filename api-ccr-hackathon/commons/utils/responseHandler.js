'use strict';

const genericError = error => ({
  fail: true,
  //status_code: error.code,
  error: {
    message: error.message | undefined,
    details: error.details | undefined,
  },
});

const genericSuccess = data => ({
  status_code: 200,
  body: data,
});

module.exports = {
  genericError,
  genericSuccess,
};
