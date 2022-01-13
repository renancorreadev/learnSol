import React from 'react'
import { MainContainer } from './styles'
import { Title } from '../../components/Title'
//Contents
import { Modulo1 } from '../../components/SectionContent/Capitulo1/Modulo1'
import { Modulo2 } from '../../components/SectionContent/Capitulo1/Modulo2'
import { Modulo3 } from '../../components/SectionContent/Capitulo1/Modulo3'
import { Modulo4 } from '../../components/SectionContent/Capitulo1/Modulo4'
import { Modulo5 } from '../../components/SectionContent/Capitulo1/Modulo5'
import { Modulo6 } from '../../components/SectionContent/Capitulo1/Modulo6'
import { Modulo7 } from '../../components/SectionContent/Capitulo1/Modulo7'

export function PageModule1() {
  return (
    <MainContainer>
      <Title title="Capitulo 1: Introdução ao Solidity" />

      <Modulo1 />
      <Modulo2 />
      <Modulo3 />
      <Modulo4 />
      <Modulo5 />
      <Modulo6 />
      <Modulo7 />
    </MainContainer>
  )
}
