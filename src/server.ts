import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import {StaticRouter} from 'react-router';

const app = express();

const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico'
];

staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '/../build', req.url);
        console.log(filePath);
        res.sendFile(filePath);
    })
})

app.get('*', (req, res)=> {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();

    const context: {url?: string}  = {};
    const ReactApp = ReactDOMServer.renderToString(
        React.createElement(
            StaticRouter,
            {location: req.url, context: context},
            React.createElement(App)
        )
    );
    // const store = createStore(ageApp);
    // const ReactApp =ReactDOMServer.renderToString(
    //     <Provider store={store}>
    //         <AppContainer/>
    //     </Provider>
    // )
    // const initialState = store.getState();

    if (context.url) {
        res.redirect(301, '/');
    } else {
        const renderedHtml = htmlData.replace(`<div id="root">{{SSR}}</div>`, `<div id="root">${ReactApp}</div>`);
        res.status(200).send(renderedHtml);
    }
});

const server = http.createServer(app);
server.listen(3000);