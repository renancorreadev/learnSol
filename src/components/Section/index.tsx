import React from 'react'
import {
  MainContainer,
  Title,
  Description,
  Capitulo,
  Code,
  BoxCode,
} from './styles'

interface SectionProps {
  title: string
  description: string
  capitulo: number
  code: string
}

export function Section({ title, capitulo, description, code }: SectionProps) {
  return (
    <MainContainer>
      <Capitulo>Capitulo: {capitulo}</Capitulo>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BoxCode>
        <Code code={code} />
      </BoxCode>
    </MainContainer>
  )
}
