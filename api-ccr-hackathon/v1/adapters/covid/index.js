'use strict';

const covidWrapper = ({
  services,
  mongoDb,
  config,
}) => {
  const covid = async ({
    payload,
  }) => {

    let lat = parseFloat(payload.lat);
    let lng = parseFloat(payload.long);

    try {
      let filterMunicipio = {
        point: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [lat, lng]
            },
            $maxDistance: 20000,
          }
        }
      };

      const result = await mongoDb.search(config.db.mongoDB, mongoDb, 'municipios', filterMunicipio);
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
