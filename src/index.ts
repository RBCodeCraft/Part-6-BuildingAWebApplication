
import { createServer } from './server';
import { registerController } from 'hapi-controllers';

import { HomeController } from './sections/home/HomeController';
import { ErrorController } from './sections/errors/ErrorController';
import { PartnersController } from './sections/partners/PartnersController';

let server = createServer();

registerController(server, HomeController, () => new HomeController());
registerController(server, PartnersController, () => new PartnersController());

registerController(server, ErrorController, () => new ErrorController());

server.start((err: any) => {
    if (err) throw err;
    console.log('Hapi Server running at', server.connections[0].info.uri);
});
