import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'

import { Header } from './components/Header'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Router>
          <Routes />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
