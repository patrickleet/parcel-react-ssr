// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router

import { rehydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom';
import importedComponents from './imported'; // eslint-disable-line
import { consolidateStreamedStyles } from 'styled-components'
import App from './App';

const helmetContext = {}
const element = document.getElementById('app');
const app = (
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    consolidateStreamedStyles();
    ReactDOM.hydrate(app, element);
  });
} else {
  ReactDOM.render(app, element);
}

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
