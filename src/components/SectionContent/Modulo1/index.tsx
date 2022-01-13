import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section } from '../../Section'

//Texto codes
import { mod1_01 } from '../../../@types/Modulo1/mod01'
import { md01_02 } from '../../../@types/Modulo1/mod02'
import { md01_03 } from '../../../@types/Modulo1/mod03'
import { md01_04 } from '../../../@types/Modulo1/mod04'
import { md01_05 } from '../../../@types/Modulo1/mod05'
import { md01_06 } from '../../../@types/Modulo1/mod06'
import { md01_07 } from '../../../@types/Modulo1/mod07'

export function Modulo1_item1() {
  return (
    <>
      {/*Modulo 1 ------------- */}

      {/*1 - Hello Wourld ------------- */}
      <Container>
        <Row>
          <Col md={12}>
            <Section
              title="Começando com solidity: 'Hello World'"
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
    </>
  )
}

export function Modulo1_item2() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Variáveis"
            capitulo={1}
            description={`Em Solidity temos 3 tipos de variaveis: 
            
             Variáveis ​​de Estado − Variáveis ​​cujos valores 
             são armazenados permanentemente em um armazenamento de contrato.
             Variáveis ​​Locais − Variáveis ​​cujos valores estão presentes até que a função esteja sendo executada.
             Variáveis ​​Globais – Existem variáveis ​​especiais no namespace global usado para obter informações sobre o blockchain., `}
            code={md01_02}
          />
        </Col>
      </Row>
    </Container>
  )
}

export function Modulo1_item3() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Section
            title="Variáveis de Estado"
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

export function Modulo1_item4() {
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

export function Modulo1_item5() {
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

export function Modulo1_item6() {
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

export function Modulo1_item7() {
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
