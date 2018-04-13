import React from 'react';
import styled from 'styled-components'

const Header = styled.header`
  font-size: 1rem;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  max-width: 90vw;
  margin: 0 auto;
  padding: 1em 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.h1`
  font-size: var(--step-up-2);
`

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`

const MenuLink = styled.li`
  margin-left: 2em;
`

export default () => (
  <Header>
    <Brand>parcel-react-ssr</Brand>
    <Menu>
      <MenuLink>Home</MenuLink>
      <MenuLink>Code Split</MenuLink>
    </Menu>
  </Header>
)