'use strict';

const serviceCovid = ({ request, config }) => {
    const getCovidMunicipio = async () => {
      const url = 'https://covid.saude.gov.br/assets/data/municipios.json';

      const requestConfig = {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      };
  
      try {
        const response = await request.get(url, requestConfig);
        return (response.data);
      } catch (error) {
        throw error;
      }
    };

    return { getCovidMunicipio };
};

module.exports = serviceCovid;