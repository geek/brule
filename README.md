![Dr. Brule](images/brule.jpg)

Dr. Brule reports on the health of your [hapi](hapijs.com) server

[![Build Status](https://secure.travis-ci.org/geek/brule.svg)](http://travis-ci.org/geek/brule)

`npm i brule`

### Usage

Register with a hapi server then use `/heartbeat` or the configured path to check that the server is responsive.

```js
const server = Hapi.server();

await server.register(Brule);
```

### Options

`path` - the pathname to configure the route to use. Defaults to '/check-it-out'
