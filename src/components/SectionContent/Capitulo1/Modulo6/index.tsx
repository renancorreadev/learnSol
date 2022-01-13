import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { md01_06 } from '../../../../@types/mod06'

export function Modulo6() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Funções View e Pure"
            capitulo={1}
            description="
            Funções que não gravam nada no blockchain podem ser declaradas como view ou pure.

            Qual é a diferença entre viewe pure?
            view funções podem ler variáveis ​​de estado e globais.

            pure funções não podem ler nem estado nem variáveis ​​globais.
            "
            code={md01_06}
          />
        </Col>
      </Row>
    </Container>
  )
}
