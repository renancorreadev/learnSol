import React from 'react'
import { MainContainer } from './styles'
import { Title } from '../../components/Title'

//Contents
import { Modulo1 } from '../../components/SectionContent/Capitulo1/Modulo1'
import { Modulo2 } from '../../components/SectionContent/Capitulo1/Modulo2'

export function Home() {
  return (
    <MainContainer>
      <Title title="Capitulo 1: Introdução ao Solidity" />
      <Modulo1 />
      <Modulo2 />
    </MainContainer>
  )
}
