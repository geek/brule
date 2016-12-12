![Dr. Brule](images/brule.jpg)

Dr. Brule reports on the health of your hapi server

`npm i brule`

### Usage

Register with a hapi server then use `/heartbeat` or the configured path to check that the server is responsive.

```js
const server = new Hapi.Server();
server.connection();

server.register(Brule, (err) => {

});
```

### Options

`path` - the pathname to configure the route to use. Defaults to '/check-it-out'
