import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet-async';
import styled from 'styled-components'
import NyanCat from '../codeSplitAssets/NyanCat';
import { Wrapper, Title } from '../components/Page';

const NyanCatWrapper = styled.div`
  margin-bottom: 1em;
`

export default () => (
  <div>
    <Helmet>
      <title>Code Split</title>
    </Helmet>
    <Wrapper>
      <div>
        <NyanCatWrapper>
          <NyanCat stars={12} />
        </NyanCatWrapper>
        <Title>Hello world - Code Split!</Title>
        <p>
          This is an code-split react component.
          <br />
          <Link to="/">Click here</Link> to see an ordinary component.
        </p>
      </div>
    </Wrapper>
  </div>
)