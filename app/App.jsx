// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from 'react';
import importedComponent from 'react-imported-component';
import Helmet from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';

import './styles';

import HelloWorld from './pages/HelloWorld';

const HelloWorld2 = importedComponent(() => import('./pages/HelloWorld2'));

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Hello World</title>
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/codeSplit" component={HelloWorld2} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
