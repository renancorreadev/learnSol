import React from 'react'

import { Logo, MainContainer, Content, Nav, NavLink } from './styles'
import ImgLogo from '../../assets/logo.png'

export function Header() {
  return (
    <MainContainer>
      <Content>
        <a href="/">
          <Logo src={ImgLogo} alt="" />
        </a>

        <Nav>
          <NavLink className="active"> Home </NavLink>
          <NavLink> Sobre Solidity </NavLink>
          <NavLink> Aprenda </NavLink>
        </Nav>
      </Content>
    </MainContainer>
  )
}
