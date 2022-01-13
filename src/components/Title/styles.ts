import styled from 'styled-components'

import { Container } from 'react-bootstrap'

export const Box = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  background-color: var(--color-green-light);
  border-radius: 0.5rem;
  padding: 5px;
`
export const MainTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: var(--dark);
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;
`
