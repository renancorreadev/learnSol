import React from 'react'

import { MainContainer } from './styles'
import { CodeBlock } from '../CodeBlock'

import { Container, Row, Col } from 'react-bootstrap'

const code = `const App = props => {
  return (
    <div>
      <h1> React App </h1>
      <div>Awesome code</div>
    </div>
  );
};
`

export function Home() {
  return (
    <MainContainer>
      <Container>
        <Row>
          <Col md={6} style={{ marginTop: '20px' }}>
            <CodeBlock code={code} language="javascript" />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  )
}
