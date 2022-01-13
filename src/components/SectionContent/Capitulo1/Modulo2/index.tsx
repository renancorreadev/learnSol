import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { md01_02 } from '../../../../Contents/mod02'

export function Modulo2() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Variaveis"
            capitulo={1}
            description="
             Em Solidity temos 3 tipos de variaveis: Variáveis ​​de Estado − Variáveis ​​cujos valores 
             são armazenados permanentemente em um armazenamento de contrato.
             Variáveis ​​Locais − Variáveis ​​cujos valores estão presentes até que a função esteja sendo executada.
             Variáveis ​​Globais – Existem variáveis ​​especiais no namespace global usado para obter informações sobre o blockchain., 
              "
            code={md01_02}
          />
        </Col>
      </Row>
    </Container>
  )
}
