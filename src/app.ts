import WebSoket from 'ws'

const server = new WebSoket.Server({ port : 3000});

console.log('server runs on port:3000')

server.on('connection', (ws: { send: (arg0: { connected: boolean; }) => void; }) => {
  ws.send({'connected': true});
})