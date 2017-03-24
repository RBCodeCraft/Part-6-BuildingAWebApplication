
import { Route, Controller } from 'hapi-controllers';

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { BasePage } from './BasePage';

export class BaseController extends Controller {

    renderPageWithStatus(
            pageComponent: React.ReactNode,
            title: string,
            status: number) {

        this.reply(renderToStaticMarkup(
            <BasePage title={title}>
                {pageComponent}
            </BasePage>
        )).code(status);
    }

    renderPage(pageComponent: React.ReactNode, title: string) {
        this.renderPageWithStatus(pageComponent, title, 200);
    }

}