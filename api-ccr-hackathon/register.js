'use strict';

const hapiAlive = require('hapi-alive');
const inert = require('inert');
const vision = require('vision');
const hapiSwaggered = require('hapi-swaggered');
const hapiSwaggeredUi = require('hapi-swaggered-ui');
const { version } = require('./package.json');
const hapiResponsetime =  require('hapi-response-time');

module.exports = [
  inert,
  vision,
  {
    plugin: hapiAlive,
    options: {
      path: '/healthcheck',
      tags: ['health', 'monitor'],
      responses: {
        healthy: {
          message: `Version: ${version}`,
        },
        unhealthy: {
          statusCode: 400,
        },
      },
      healthCheck: async () => {
        await true;
      },
    },
  },
  {
    plugin: hapiSwaggered,
    options: {
      tags: {
        api: 'API',
      },  
      info: {
        title: 'API Hackathon - CCR',
        description: 'Swagger',
        version: version,
      },
      stripPrefix: '/v1',
    },
  },
  {
    plugin: hapiResponsetime,
    options: {
      path: '/timeout',
      async handler(request, h) {
        await (() => new Promise(resolve => setTimeout(resolve, 10000)))();
        return h.response('Response after 10 seconds');
      },
    },
  },
  {
    plugin: hapiSwaggeredUi,
    options: {
      title: 'Swagger UI',
      path: '/docs',
      swaggerOptions: {
        validatorUrl: null,
      },
    },
  },
];
