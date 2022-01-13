import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { md01_04 } from '../../../../@types/mod04'

export function Modulo4() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Variáveis Locais"
            capitulo={1}
            description="
              Ao contrário das variáveis ​​de estado, as variáveis ​​locais não são armazenadas no blockchain.

              Como você declara uma variável local?
              Variáveis ​​locais são declaradas dentro de funções.

              Quaisquer dados atribuídos a uma variável local serão perdidos após a execução da função terminar.

              Aqui está um exemplo
              "
            code={md01_04}
          />
        </Col>
      </Row>
    </Container>
  )
}
