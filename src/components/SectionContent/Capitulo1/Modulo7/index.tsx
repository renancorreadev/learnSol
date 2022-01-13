import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { md01_07 } from '../../../../@types/mod07'

export function Modulo7() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Contador"
            capitulo={1}
            description="
              Como faço para obter o valor da contagem?
            Você não precisará implementar uma função getter para count. 
            Solidity cria automaticamente uma external viewfunção para a variável de estado count.
            "
            code={md01_07}
          />
        </Col>
      </Row>
    </Container>
  )
}
