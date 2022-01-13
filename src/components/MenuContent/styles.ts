import styled from 'styled-components'

import { Container, Dropdown } from 'react-bootstrap'

export const Box = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  width: 80%;

  background-color: var(--color-white);
  /* top-left | top-right | bottom-right | bottom-left */
  border-radius: 0rem 0 10rem 10rem;

  padding: 5px;
`

export const Toggle = styled(Dropdown.Toggle)`
  font-size: 1rem;
  background: var(--dark);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--color-white);
  text-decoration: none;

  &:hover {
    color: var(--color-green-dark);
    font-weight: bold;
  }
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

export const Link = styled(Dropdown.Item)`
  font-size: 0.7rem;
  background: var(--color-white);

  color: var(--color-dark);
  text-decoration: none;
`
