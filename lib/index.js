'use strict';

// Load modules

const Package = require('../package.json');
const responses = require('./responses');

module.exports = function (server, options, next) {
  server.route({
    path: options.path || '/check-it-out',
    method: 'GET',
    handler: function (request, reply) {
      const index = Math.floor(Math.random() * 5);
      const response = responses[index];
      reply(response);
    }
  });

  next();
};

module.exports.attributes = {
  pkg: Package
};
