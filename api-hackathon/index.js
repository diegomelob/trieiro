'use strict';

const server = require('./server');

const init = async () => {
  const  serverInstance = await server;
  try {
    await serverInstance.start();

    console.log(`🚀  API server start in port : ${serverInstance.info.port}`);

  } catch (error) {
    console.log(`APP failed to start ${error.message}`);
  }
};

init();
