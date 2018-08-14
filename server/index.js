import path from 'path'
import compression from 'compression';
import ssr from './ssr';
import express from 'express'
import favicon from '../app/favicon.ico';
import { log } from './logger'

const app = express()

// Add gzip compression to responses.
// NOTE: in production scaling scenarios,
// you should not use compression in node.
// Instead, offload to nginx or similar.
app.use(compression())

// Favicon
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);
app.use('/favicon.ico', (req, res) => res.sendFile(path.resolve(process.cwd(), 'dist', 'clients', 'client', faviconFileName)));

// Expose the public directory as /dist and point to the browser version
app.use('/dist/clients', express.static(path.resolve(process.cwd(), 'dist', 'clients')));

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get('/*', ssr)

// Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 1234;
app.listen(port, () => {
  log.info(`Listening on port ${port}...`);
});