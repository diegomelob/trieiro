'use strict';

const prfWrapper = ({
  services,
}) => {
  const prf = async ({
    payload,
  }) => {
    try {    
      console.log('adapter',payload);
      const response = await services.servicePrf.getPontos(payload);
      return response;
    } catch (errorCatch) {
      throw errorCatch;
    }
  };
  return {
    prf,
  };

};

module.exports = prfWrapper;
