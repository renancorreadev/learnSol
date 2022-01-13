import React from 'react'
import { _Title } from './styles'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  //disable eslint for this line
  return <_Title>{title}</_Title>
}
