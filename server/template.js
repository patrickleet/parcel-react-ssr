export default ({ src, drainHydrateMarks }) => ([
  `<!DOCTYPE html>
  <html>
    <head>
      <title>Hello World</title>
    </head>
    <body>
      <div id="app">`,`
      </div>
      <script src="${src}"></script>
      ${drainHydrateMarks}
    </body>
  </html>`
])
