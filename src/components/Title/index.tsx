import React from 'react'
import { MainTitle } from './styles'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  //disable eslint for this line
  return <MainTitle>{title}</MainTitle>
}
