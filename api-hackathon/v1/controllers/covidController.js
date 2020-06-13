'use strict';

const covidWrapper = (adapters) => {
  const covid = (request, reply) => {
    const payload = {
      ...request.query,
    };
    return adapters.covid({
      payload,
      headers: {
        ...request.headers,
      },
      onSuccess: (data) => {
        return reply.response(data).code(200);
      },
      onError: err => reply.response(err).code(err.status_code),
    });
  };

  return {
    covid,
  };
};

module.exports = covidWrapper;
