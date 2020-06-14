'use strict';

const servicePrf = ({ request, config }) => {
  const getPontos = async (payload) => {
    const uf = payload.uf ? payload.uf.toUpperCase() : '';
    const municipio = payload.municipio ? payload.municipio : '';
    const categoria = payload.categoria ? payload.categoria : '';
    const rodovia = payload.rodovia ? payload.rodovia : '';
    const url = `https://api-siga-caminhoneiro.prf.gov.br/api/v1/busca/pontos?busca=lista&uf=${uf}&municipio=${municipio}&categoria=${categoria}&br=${rodovia}`;

    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };

    try {
      const response = await request.get(url, requestConfig);
      console.log('requestURL', response.config);
      return (response.data);
    } catch (error) {
      throw error;
    }
  };

  return { getPontos };
};

module.exports = servicePrf;