// Middleware for the server-rendering

import through from 'through';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components'
import App from '../app/App';
import { pageData } from './pageData';
import template from './template';
import { printDrainHydrateMarks } from 'react-imported-component';
import { log } from './logger'
// import { getDataFromTree } from 'react-apollo';

export default (req, res) => {
  const context = {};
  const helmetContext = {};

  const router = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  try {
    // If you were using Apollo, you could fetch data with this
    // await getDataFromTree(router);

    const sheet = new ServerStyleSheet()
    const jsx = sheet.collectStyles(router)
    const stream = sheet.interleaveWithNodeStream(
      renderToNodeStream(jsx)
    )

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      const { src } = pageData

      const [header, footer] = template({
        drainHydrateMarks: printDrainHydrateMarks(),
        src
      })
      res.status(200)
      res.write(header)
      stream
        .pipe(
          through(
            function write(data) {
              this.queue(data)
            },
            function end() {
              this.queue(footer)
              this.queue(null)
            }
          )
        )
        .pipe(res)
    }
  } catch (e) {
    log.error(e)
    res.status(500)
    res.end()
  }
};
