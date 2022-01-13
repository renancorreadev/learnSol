import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { mod1_01 } from '../../../../@types/mod01'

export function Modulo1() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Começando com solidity 'Hello World'"
            capitulo={1}
            description="
              Esse é o famoso Hello World do Solidity, 
              que é um exemplo bem simples de como criar um contrato
              em solidity.
              "
            code={mod1_01}
          />
        </Col>
      </Row>
    </Container>
  )
}
