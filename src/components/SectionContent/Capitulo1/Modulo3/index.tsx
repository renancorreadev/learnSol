import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../../Section'

//Texto codes
import { md01_03 } from '../../../../@types/mod03'

export function Modulo3() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Variaveis de Estado"
            capitulo={1}
            description="
             As variáveis ​​de estado são armazenadas no blockchain. 
             Assim, você pode salvar alguns dados em uma variável de estado, 
             voltar uma semana depois e os dados ainda estarão lá.
              "
            code={md01_03}
          />
        </Col>
      </Row>
    </Container>
  )
}
