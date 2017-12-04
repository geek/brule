'use strict';

// Load modules

const Package = require('../package.json');
const Responses = require('./responses');


exports.register = function (server, options) {
  server.route({
    path: options.path || '/check-it-out',
    method: 'GET',
    handler: function (request, h) {
      const index = Math.floor(Math.random() * Responses.length);
      return Responses[index];
    }
  });
};

exports.pkg = Package;
