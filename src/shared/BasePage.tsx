import * as React from 'react';

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
            </head>
            <body className="xui-body">
                {props.children}
            </body>
        </html>
    );
}
