import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { CodeBlock } from '../CodeBlock'
import { Col } from 'react-bootstrap'

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;

  background-color: var(--color-dark-medium);
  border-radius: 0.5rem;
  padding: 20px;
  box-shadow: 5px 5px 50px 12px rgba(255, 255, 255, 0.6);
`

export const Capitulo = styled.h5`
  font-family: roboto, sans-serif;
  color: var(--text-title);
  font-size: 1.5rem;
`
export const Title = styled.h2`
  font-family: roboto, sans-serif;
  color: var(--text-title);
  font-size: 2.5rem;
`

export const Description = styled.h1`
  font-family: roboto, sans-serif;
  color: var(--text-title);
  font-size: 1rem;

  position: relative;
  margin-top: 2rem;
`

export const BoxCode = styled(Col).attrs({
  md: 10,
})`
  position: relative;
  margin-top: 1rem;
`
export const Code = styled(CodeBlock).attrs({
  language: 'solidity',
})``
