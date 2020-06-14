'use strict';

const covidWrapper = ({
  services,
}) => {
  const covid = async ({
    payload,
  }) => {
    try {    
      const response = await services.serviceCovid.getCovidMunicipio(payload);
      return response;
    } catch (errorCatch) {
      throw errorCatch;
    }
  };
  return {
    covid,
  };

};

module.exports = covidWrapper;
