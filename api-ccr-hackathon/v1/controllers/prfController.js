'use strict';

const prfWrapper = (adapters) => {
  const prf = (request, reply) => {
    const payload = {
      ...request.query,
    };
    return adapters.prf({
      payload,
      headers: {
        ...request.headers,
      },
      onSuccess: (data) => {
        console.log('prfController', data)
        return reply.response(data).code(200);
      },
      onError: err => reply.response(err).code(err.status_code),
    });
  };

  return {
    prf,
  };
};

module.exports = prfWrapper;
