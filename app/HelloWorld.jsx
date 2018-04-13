// Dead simple component for the hello world (hi mom!)

import React from 'react';
import Helmet from 'react-helmet-async';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: var(--step-up-5);
  margin-bottom: .5em;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
`

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
