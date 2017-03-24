import * as React from 'react';
import { NavBar } from './components/NavBar';

export interface IBasePageProps {
    title: string;
    children?: React.ReactNode;
}

export function BasePage(props: IBasePageProps) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
            </head>
            <body className="xui-body">
                <NavBar title="Hapi App" />
                {props.children}
            </body>
        </html>
    );
}
