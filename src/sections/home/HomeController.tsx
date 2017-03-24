
import { Route } from 'hapi-controllers';
import { BaseController } from '../../shared/BaseController';

import * as React from 'react';
import { HomePage } from './HomePage';

export class HomeController extends BaseController {

    @Route({
        method: 'GET',
        path: '/'
    })
    homeController() {
        this.renderPage(<HomePage />, 'Home Page')
    }

}