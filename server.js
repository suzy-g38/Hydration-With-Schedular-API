/* eslint no-console: "off" */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import express from 'express';
import browserify from 'browserify';
import babelify from 'babelify';
import App from './components/App';
import { renderToString } from "react-dom/server";

const app = express();
const port = 3000;

app.get('/bundle.js', (req, res) => {
  browserify('./client.js', { debug: true }).transform(babelify).bundle().pipe(res);
});

// app.get('/', (req, res) => {
//   const md = new MobileDetect(req.headers['user-agent']);
//   let fallbackScreenClass = 'xxl';
//   if (md.phone() !== null) fallbackScreenClass = 'xs';
//   if (md.tablet() !== null) fallbackScreenClass = 'md';

//   const component = <App fallbackScreenClass={fallbackScreenClass} />;
//   const content = ReactDomServer.renderToString(component);

//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //     <head>
//   //       <title>React SSR Example</title>
//   //       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//   //     </head>
//   //     <body>
//   //       <div id="root">${content}</div>
//   //       <script src="bundle.js"></script>
//   //     </body>
//   //   </html>
//   // `);

//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>React SSR Example</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//       </head>
//       <body>
//        <div id="root">
//           <div class="critical-hydration">${content}</div> 
//           <div class="delayed-hydration"></div> 
//         </div>
//         <script src="bundle.js" defer></script>
//       </body>
//     </html>
//   `);
//   console.info('react-grid-system example rendered server-side.');
// });

// app.get("/", (req, res) => {
//   const md = new MobileDetect(req.headers["user-agent"]);
//   let fallbackScreenClass = "xxl";
//   if (md.phone() !== null) fallbackScreenClass = "xs";
//   if (md.tablet() !== null) fallbackScreenClass = "md";

//   const component = <App fallbackScreenClass={fallbackScreenClass} />;
//   const content = ReactDomServer.renderToString(component);

//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //     <head>
//   //       <title>React SSR Example</title>
//   //       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//   //     </head>
//   //     <body>
//   //       <div id="root">
//   //         <div class="critical-hydration">
//   //           <h1>Optimized Hydration</h1>
//   //         </div> 
//   //         <div class="delayed-hydration"></div> 
//   //       </div>
//   //       <script src="bundle.js" defer></script>
//   //     </body>
//   //   </html>
//   // `);

//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //     <head>
//   //       <title>React SSR Example</title>
//   //       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//   //     </head>
//   //     <body>
//   //       <div id="root">
//   //         <div class="critical-hydration">${content}</div> 
//   //         <div class="delayed-hydration"></div> 
//   //       </div>
//   //       <script src="bundle.js" defer></script>
//   //     </body>
//   //   </html>
//   // `);


//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //     <head>
//   //       <title>React SSR Example</title>
//   //       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//   //     </head>
//   //     <body>
//   //       <div id="root">${content}</div> 
//   //       <script src="bundle.js" defer></script>
//   //     </body>
//   //   </html>
//   // `);
// });


// app.get("/", (req, res) => {
//   const md = new MobileDetect(req.headers["user-agent"]);
//   let fallbackScreenClass = "xxl";
//   if (md.phone() !== null) fallbackScreenClass = "xs";
//   if (md.tablet() !== null) fallbackScreenClass = "md";

//   // Separate components for different hydration levels
//   const criticalContent = ReactDomServer.renderToString(<App fallbackScreenClass={fallbackScreenClass} criticalOnly={true} />);
//   const delayedContent = ReactDomServer.renderToString(<App fallbackScreenClass={fallbackScreenClass} delayedOnly={true} />);
//   const nonCriticalContent = ReactDomServer.renderToString(<App fallbackScreenClass={fallbackScreenClass} nonCriticalOnly={true} />);

//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>React SSR Example</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//       </head>
//       <body>
//         <div id="root">
//           <div class="critical-hydration">${criticalContent}</div> 
//           <div class="delayed-hydration">${delayedContent}</div> 
//           <div class="non-critical-hydration">${nonCriticalContent}</div> 
//         </div>
//         <script src="bundle.js" defer></script>
//       </body>
//     </html>
//   `);
// });


app.get("/", (req, res) => {
  const html = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hydration Blocking Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js" defer></script>
      </body>
    </html>
  `);
});


// app.get("/", (req, res) => {
//   let didError = false;

//   const { pipe } = renderToPipeableStream(<App />, {
//     onShellReady() {
//       res.setHeader("Content-Type", "text/html");
//       res.write(`
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>React SSR Example</title>
//             <meta name="viewport" content="width=device-width, initial-scale=1" />
//           </head>
//           <body>
//             <div id="root">`);
//       pipe(res);
//       res.write(`</div>
//         <script src="bundle.js" defer></script>
//       </body>
//     </html>`);
//     },
//     onError(error) {
//       didError = true;
//       console.error(error);
//     },
//   });

//   res.on("close", () => {
//     if (didError) {
//       res.end();
//     }
//   });
// });



app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
