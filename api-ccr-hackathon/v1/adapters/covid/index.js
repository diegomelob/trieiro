'use strict';
const distanceCoordinates = require('../../../commons/utils/distanceCoordinates');

const covidWrapper = ({
  services,
  mongoDb,
  config,
  covidMapper,
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

      const response = [];
      const result = await mongoDb.search(config.db.mongoDB, mongoDb, 'municipios', query);

      for (const element of result) {

        const filterCodIbge = element.codigo_ibge.toString().substring(0,(element.codigo_ibge.toString().length - 1));
        const filter = { cod: filterCodIbge };

        const resCasosCovid = await mongoDb.search(config.db.mongoDB, mongoDb, 'casosCovid', filter);
        const result = Object.assign(element, ...resCasosCovid);
        response.push(result);
      }

      let responseMap = [];
      for (const element of response) {
        let objResponseMap = {};
        objResponseMap.codigo_ibge = element.codigo_ibge;
        objResponseMap.nome = element.nome;
        objResponseMap.latitude = element.point.coordinates[0];
        objResponseMap.longitude = element.point.coordinates[1];
        objResponseMap.casos = element.casosAcumulado;
        objResponseMap.incidencia = await covidMapper.mapIncidencias(element.casosAcumulado);        
        objResponseMap.distance = await distanceCoordinates.calculate(lat, lng, objResponseMap.latitude, objResponseMap.longitude, 'M');
        responseMap.push(objResponseMap);
      }
      return responseMap;
    } catch (errorCatch) {
      throw errorCatch;
    }
  };
  return {
    covid,
  };

};

module.exports = covidWrapper;
