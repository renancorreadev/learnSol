import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../../Pages/Home'

//Modules Modulo 1
import {
  Modulo1_item1,
  Modulo1_item2,
  Modulo1_item3,
  Modulo1_item4,
  Modulo1_item5,
  Modulo1_item6,
  Modulo1_item7,
} from '../../components/SectionContent/Modulo1'

export function RoutesModulos() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/helloworld" exact component={Modulo1_item1} />
      <Route path="/variaveis" exact component={Modulo1_item2} />
      <Route path="/variaveis_estado" exact component={Modulo1_item3} />
      <Route path="/variaveis_locais" exact component={Modulo1_item4} />
      <Route path="/variaveis_globais" exact component={Modulo1_item5} />
      <Route path="/pure_view" exact component={Modulo1_item6} />
      <Route path="/contador" exact component={Modulo1_item7} />
    </Switch>
  )
}
