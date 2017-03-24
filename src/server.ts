
import * as Hapi from 'hapi';

export function createServer() {

    const server = new Hapi.Server();

    server.connection({
        port: 8000
    });
    
    return server;

}