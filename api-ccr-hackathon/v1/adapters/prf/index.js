'use strict';

const mapRequest = (payload) => {
  let response = {};
  if(payload.uf) {
    response.uf = payload.uf;
  }
  if(payload.municipio) {
    response.municipio = payload.municipio;
  }
  if(payload.categoria) {
    response.categoria = payload.categoria;
  }
  if(payload.rodovia) {
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
        ...mapRequest(payload),
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

      const response = await mongoDb.search(config.db.mongoDB, mongoDb, 'pontos', query);
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
