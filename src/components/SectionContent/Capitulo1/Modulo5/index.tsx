import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { md01_05 } from '../../../../@types/mod05'

export function Modulo5() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Variáveis Globais"
            capitulo={1}
            description="
            Variáveis ​​globais fornecem informações sobre o blockchain

            Aqui apresentamos algumas variáveis ​​globais que são comumente usadas.
            "
            code={md01_05}
          />
        </Col>
      </Row>
    </Container>
  )
}
