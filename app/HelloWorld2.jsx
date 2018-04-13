import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet-async';
import './codeSplitAssets/NyanCat.scss';
import Go from './codeSplitAssets/NyanCat';

export default class Nyan extends Component {
  componentDidMount() {
    Go();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Code Split</title>
        </Helmet>
        <h1 className="hello-world">Hello world 2!</h1>
        <p style={{ textAlign: 'center' }}>
                This is a code-split component.
          <br />
          <Link to="/">Click here</Link> to see an ordinary component.
        </p>
        <div className="wrapper">
          <div className="rainbow">
            <span />
          </div>
          <div className="nyan-cat">
            <div className="feet" />
            <div className="tail">
              <span />
            </div>
            <div className="body" />
            <div className="head" />
          </div>
          <div className="stars" />
        </div>
      </div>
    );
  }
}
