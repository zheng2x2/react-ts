import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';

import React from 'react';
import ReactDOMServer from 'react-dom/server';





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
        const filePath = path.join(__dirname, '../build', req.url);
        console.log(filePath);
        res.sendFile(filePath);
    })
})

app.get('*', (req, res)=> {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();

    res.sendFile(htmlData);

    // const ReactApp = ReactDOMServer.renderToString(React.createElement);
    // const renderedHtml =htmlData.replace(`{{ SSR }}`, ReactApp);
    // res.status(200).send(renderedHtml);
});

const server = http.createServer(app);
server.listen(3000);