import React from 'react'
import { MainTitle, Box } from './styles'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  //disable eslint for this line
  return (
    <Box>
      <MainTitle>{title}</MainTitle>
    </Box>
  )
}
