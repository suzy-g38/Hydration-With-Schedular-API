/* eslint no-console: "off" */

import React from 'react';
import express from 'express';
import browserify from 'browserify';
import babelify from 'babelify';
import App from '../src/App';
import { renderToString } from "react-dom/server";
import path from 'path';

const app = express();
const port = 3000;

app.get('/bundle.js', (req, res) => {
  browserify(path.resolve(__dirname, '../src/client.js'), { debug: true })
  .transform(babelify)
  .bundle()
  .pipe(res);

});


app.get("/", (req, res) => {
  const html = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Solve Hydration Blocking With Browser Scheduling API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js" defer></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
