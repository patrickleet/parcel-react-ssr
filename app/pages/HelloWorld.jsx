// Dead simple component for the hello world (hi mom!)

import React from 'react';
import Helmet from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wrapper, Title } from '../components/Page';

export default () => (
  <div>
    <Helmet>
      <title>Hello World!</title>
    </Helmet>
    <Wrapper>
      <div>
        <Title>Hello world!</Title>
        <p>
          This is an ordinary react component.
          <br />
          <Link to="/codeSplit">Click here</Link> to see a code-split component.
        </p>
      </div>
    </Wrapper>
  </div>
)
