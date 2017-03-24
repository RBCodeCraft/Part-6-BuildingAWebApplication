
import { Route } from 'hapi-controllers';
import { BaseController } from '../../shared/BaseController';

import * as React from 'react';
import { Error404 } from './Error404';

export class ErrorController extends BaseController {

    @Route({
        method: 'GET',
        path: '/{url*}'
    })
    homeController() {
        this.renderPageWithStatus(<Error404 />, '404 Not Found', 404);
    }

}