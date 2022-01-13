import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'

import { Header } from './components/Header'
import { MenuContent } from './components/MenuContent'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <MenuContent />
      <BrowserRouter>
        <Router>
          <Routes />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
