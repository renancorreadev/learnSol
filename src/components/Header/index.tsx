import React from 'react'

import { Logo, Container, Content, Nav, NavLink } from './styles'
import ImgLogo from '../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo src={ImgLogo} alt="" />
        <Nav>
          <NavLink className="active"> Home </NavLink>
          <NavLink> Sobre Solidity </NavLink>
          <NavLink> Aprenda </NavLink>
        </Nav>
      </Content>
    </Container>
  )
}
