# parcel-react-ssr

Simple example of how to do streaming server-rendering. You will not believe how easy it is!

Using:

* parcel-bundler
* react
* react-router-dom
* react-helmet-async (SEO)
* react-imported-component (Code Splitting)
* styled-components (Streaming CSS-in-JS)

Handy Extras

* gzip compression
* eslint
* [favicon example](server/index.js#16)
* [Code split example](app/App.jsx#12)
* [Relative Typography scale based on em's](app/styles.js#5)
* [CSS Reset](app/styles.js#29)
* ["system" font-family](app/styles.js#22)

## How to run

* `npm run dev` - Run the development server with hot reload but no server-rendering
* `npm run dev-server` - Run the server with nodemon to rebuild with every change
* `npm run build` - Build for production, required before running
* `npm start` - Start the production server

## How does it work?

To do proper server-rendering, the code is bundled in two version: one for the browser and one for Node.js.

The browser version is in the `dist/client` folder and the Node.js version is in `dist/server`. However, they both share the same public path for their files: `/dist` and it points to the browser version. Go read the code, it's pretty straightforward!

## Read the code!

1. [package.json](package.json) - Start by reading the `scripts` section to understand how the build process works. Yes it's that dead simple!
1. [app/index.html](app/index.html) - Your client-side HTML file (for development)
1. [server/template.js](server/template.js) - Your server-side HTML file template (for server rendering)
1. [app/client.js](app/client.js) - Entry point for your browser version
1. [app/App.jsx](app/App.jsx) - Your main application component shared between your browser and Node.js version
1. [app/pages/HelloWorld.jsx](app/pages/HelloWorld.jsx) - Dead simple hello world
1. [app/pages/HelloWorld2.jsx](app/pages/HelloWorld2.jsx) - A fun code split example
1. [app/codeSplitAssets/NyanCat.scss](app/codeSplitAssets/NyanCat.scss) - Example of SCSS
1. [app/styles.js](app/styles.js) - Global Styles for styled-components - renders in stream - fast! Don't overuse - only put critical styles here!
1. [server/index.js](server/index.js) - Entry point for your Node.js version
1. [server/ssr.js](server/ssr.js) - Middleware taking care of server-side-rendering
1. [server/pageData.js](server/pageData.js) - Gets generated bundle links from `dist/index.html` as the template with cheerio. Exports a singleton to as an optimization.
