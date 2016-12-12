'use strict';

// Load modules

const Package = require('../package.json');
const Responses = require('./responses');


module.exports = function (server, options, next) {
  server.route({
    path: options.path || '/check-it-out',
    method: 'GET',
    handler: function (request, reply) {
      const index = Math.floor(Math.random() * Responses.length);
      reply(Responses[index]);
    }
  });

  next();
};

module.exports.attributes = {
  pkg: Package
};
