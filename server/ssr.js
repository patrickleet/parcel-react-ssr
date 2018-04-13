// Middleware for the server-rendering

import through from 'through';
import path from 'path'
import React from 'react';
// import { getDataFromTree } from 'react-apollo';
import { renderToNodeStream } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components'

import App from '../app/App';
import { pageData } from './generateHtml';
import template from './template';
import { printDrainHydrateMarks } from 'react-imported-component';

export default async (req, res) => {
  const context = {};
  const helmetContext = {};

  const router = (

      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>

  );

  try {
    // await getDataFromTree(router);

    const sheet = new ServerStyleSheet()
    const jsx = sheet.collectStyles(router)
    const stream = sheet.interleaveWithNodeStream(
      renderToNodeStream(jsx)
    )

    // const stream = renderToNodeStream(router)

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      // const { helmet } = helmetContext;
      const { src } = pageData

      // console.log({title: helmetContext.title})

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
    console.log(e)
    res.end()
  }
};
