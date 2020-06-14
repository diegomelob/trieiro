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
      let query = {
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

      const result = await mongoDb.search(config.db.mongoDB, mongoDb, 'municipios', query);
      //const response = await services.serviceCovid.getCovidMunicipio(payload);
      return result;
    } catch (errorCatch) {
      throw errorCatch;
    }
  };
  return {
    covid,
  };

};

module.exports = covidWrapper;
