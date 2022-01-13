import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { PageModule1 } from '../Pages/Modulo1'

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Modulo1" exact component={PageModule1} />
    </Switch>
  )
}
