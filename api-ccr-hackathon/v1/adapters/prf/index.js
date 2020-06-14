'use strict';
const distanceCoordinates = require('../../../commons/utils/distanceCoordinates');

const mapRequest = (payload) => {
  let response = {};
  if (payload.uf) {
    response.sg_uf = payload.uf.toUpperCase();;
  }
  if (payload.municipio) {
    response.municipio = payload.municipio;
  }
  if (payload.categoria) {
    response.categoria = payload.categoria;
  }
  if (payload.rodovia) {
    response.br = payload.rodovia;
  }
  return response;
}

const prfWrapper = ({
  config,
  mongoDb,
}) => {
  const prf = async ({
    payload,
  }) => {
    try {
      let lat = parseFloat(payload.latitude);
      let lng = parseFloat(payload.longitude);

      let query = {
        ...mapRequest,
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
      console.log(JSON.stringify(query));
      const response = await mongoDb.search(config.db.mongoDB, mongoDb, 'pontos', query);
      response.map(async ponto => {
        ponto.rating = Math.floor(Math.random() * 5);
        ponto.latitude = ponto.point.coordinates[0];
        ponto.longitude = ponto.point.coordinates[1];
        ponto.distance = await distanceCoordinates.calculate(lat, lng, ponto.latitude, ponto.longitude, 'M');

        delete ponto.point;
        delete ponto._id;
      })
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
