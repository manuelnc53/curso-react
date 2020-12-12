
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from './Home'
import Formulario from './Formulario'
  function Router(){
    return(
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/formulario">
              <Formulario/>
          </Route>
          <Route path="*">
              
              <h1>PAGINA NO ENCONTRADA </h1>
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Router