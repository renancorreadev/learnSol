import React from 'react'
import { GlobalStyle } from './styles/global'

//componentes
import { Header } from './components/Header'
import { Home } from './components/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  )
}

export default App
