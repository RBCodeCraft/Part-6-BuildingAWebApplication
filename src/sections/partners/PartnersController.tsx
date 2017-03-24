
import { Route } from 'hapi-controllers';
import { BaseController } from '../../shared/BaseController';

import * as React from 'react';
import { PartnersPage } from './PartnersPage';

export class PartnersController extends BaseController {

    @Route({
        method: 'GET',
        path: '/partners'
    })
    partnersPage() {
        this.renderPage(<PartnersPage />, 'Home Page')
    }

}