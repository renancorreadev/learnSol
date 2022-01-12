import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

import { Code, Pre } from './styles.'

interface PrismaProps {
  code: string
  language: string
}

export function CodeBlock({ code, language, ...rest }: PrismaProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Pre>
      <Code className={`language-${language}`}>{code}</Code>
    </Pre>
  )
}
