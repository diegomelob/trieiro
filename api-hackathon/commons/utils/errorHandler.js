'use strict';

const genericError = errorData => ({
  fail: true,
  status_code: errorData.code,
  error: {
    message: errorData.message,
    details: errorData.details,
  },
});

module.exports = {
  genericError,
};
