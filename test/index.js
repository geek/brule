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


it('can be registered', async () => {
  const server = Hapi.server();
  await server.register(Brule);
});

it('responds with a 200 at /check-it-out', async () => {
  const server = Hapi.server();
  await server.register(Brule);
  await server.initialize();
  const res = await server.inject('/check-it-out');
  expect(res.statusCode).to.equal(200);
});

it('responds with a 200 at the configured path', async () => {
  const path = '/drbrule';
  const server = Hapi.server();
  await server.register({ plugin: Brule, options: { path } });
  const res = await server.inject(path);
  expect(res.statusCode).to.equal(200);
});

it('responds with a non empty response', async () => {
  const server = Hapi.server();
  await server.register(Brule);
  await server.initialize();
  const res = await server.inject('/check-it-out');
  expect(res.statusCode).to.equal(200);
  expect(res.result).to.part.include(responses);
});
