import React from 'react'

import { Box, MainUl, MainLi, Link } from './styles'

export function MenuContent() {
  return (
    <Box>
      <MainUl>
        <MainLi>
          <Link href="/Modulo1">Modulo 1 | Introdução</Link>
        </MainLi>
        <MainLi>
          <Link href="/Modulo2'">Modulo 2 | Metodos e Funções</Link>
        </MainLi>
      </MainUl>
    </Box>
  )
}
