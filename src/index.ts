
import * as Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request: Hapi.Request, reply: Hapi.IReply) => {
        reply('Hey!');
    }
});

server.start((err: any) => {
    if (err) throw err;
    console.log('Hapi Server running at', server.connections[0].info.uri)
});
