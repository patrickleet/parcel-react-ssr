// Dead simple component for the hello world (hi mom!)

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: var(--step-up-5)
`

export default function HelloWorld() {
  return (
    <div>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <Title>Hello world!</Title>
      <p style={{ textAlign: 'center' }}>
      This is an ordinary react component.
        <br />
        <Link to="/codeSplit">Click here</Link> to see a code-split component.
      </p>
    </div>);
}
