import styled from 'styled-components'

import { Container } from 'react-bootstrap'

export const Box = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  width: 80%;

  background-color: var(--color-dark-medium);
  border-radius: 0.5rem;
  padding: 5px;
`
export const MainUl = styled.ul`
  font-size: 0.5em;
  text-align: center;
  color: var(--dark);
  font-weight: bold;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const MainLi = styled.li`
  font-size: 1.3rem;
  text-decoration: none;
  margin-left: 2rem;
  list-style-type: none;
`

export const Link = styled.a`
  font-size: 1rem;
  background: var(--color-white);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--color-dark);
  text-decoration: none;

  &:hover {
    color: var(--color-green-dark);
    font-weight: bold;
  }
`
