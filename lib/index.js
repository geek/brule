'use strict';

// Load modules

const Package = require('../package.json');


module.exports = function (server, options, next) {
  server.route({
    path: options.path || '/heartbeat',
    method: 'GET',
    handler: function (request, reply) {
      reply('');
    }
  });

  next();
};

module.exports.attributes = {
  pkg: Package
};