'use strict';

// Load modules

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const Brule = require('../');
const responses = require('../lib/responses');


// Test shortcuts
const lab = exports.lab = Lab.script();
const it = lab.it;
const expect = Code.expect;


it('can be registered', (done) => {
  const server = new Hapi.Server();
  server.connection();
  server.register(Brule, (err) => {
    expect(err).to.not.exist();
    done();
  });
});

it('responds with a 200 at /check-it-out', (done) => {
  const server = new Hapi.Server();
  server.connection();
  server.register(Brule, (err) => {
    expect(err).to.not.exist();
    server.inject('/check-it-out', (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

it('responds with a 200 at the configured path', (done) => {
  const path = '/drbrule';
  const server = new Hapi.Server();
  server.connection();
  server.register({ register: Brule, options: { path } }, (err) => {
    expect(err).to.not.exist();
    server.inject(path, (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

it('responds with a non empty response', (done) =>{
  const server = new Hapi.Server();
  server.connection();
  server.register(Brule, (err) =>{
    expect(err).to.not.exist();
    server.inject('/check-it-out', (res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.part.include(responses);
      done();
    });
  });
});
