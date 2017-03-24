
import { createServer } from './server';
import { registerController } from 'hapi-controllers';

import { HomeController } from './sections/home/HomeController';
import { ErrorController } from './sections/errors/ErrorController';

let server = createServer();

registerController(server, HomeController, () => new HomeController());
registerController(server, ErrorController, () => new ErrorController());

server.start((err: any) => {
    if (err) throw err;
    console.log('Hapi Server running at', server.connections[0].info.uri);
});
