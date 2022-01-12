import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const MainContainer = styled(Container)`
  height: 5rem;
  border-bottom: 1px solid var(--color-green-primary);
  background-color: var(--color-green-primary);
`

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  //alinhando vertitalmente
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 5rem;
  width: auto;
`

export const Nav = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  margin-left: 5rem;
  height: 5rem;

  a {
    font-family: Roboto, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;

    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: var(--color-dark-medium);

    transition: color 0.2s;

    //Sempre que haver uma ancora a partir do proprio elemento
    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: var(--color-white);
    }

    &.active {
      color: var(--color-white);
      font-weight: bold;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0.2rem;
      background-color: var(--color-white);
    }
  }
`

export const NavLink = styled.a``
