import React from 'react'

import { Box, MainUl, Link, Toggle } from './styles'
import { Dropdown } from 'react-bootstrap'

export function MenuContent() {
  return (
    <Box>
      <MainUl>
        <Dropdown>
          <Toggle
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
          >
            Modulo 1 | Introdução
          </Toggle>

          <Dropdown.Menu>
            <Link href="/helloworld">01 - HelloWorld</Link>
            <Link href="/variaveis">02 - Váriaveis</Link>
            <Link href="/variaveis_estado">03 - Variáveis de Estado</Link>
            <Link href="/variaveis_locais">04 - Variáveis Locais</Link>
            <Link href="/variaveis_globais">05 - Variáveis Globais</Link>
            <Link href="/pure_view">06 - Funções View e Pure</Link>
            <Link href="/contador">07 - Contador</Link>
          </Dropdown.Menu>
        </Dropdown>
      </MainUl>
    </Box>
  )
}
