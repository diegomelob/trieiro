'use strict';

const mappers = {
  mapIncidencias: async (data) => {
    if(data <= 100) {
        return 'LOW';
      } else if(data > 100 && data < 1000) {
        return 'MEDIUM';
      } else {
        return 'HIGH'
      }
  },
};

module.exports = mappers;
