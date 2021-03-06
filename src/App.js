import React from "react"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"

import Homepage from "./Components/Homepage"
import SpeedtypingGame from "./Components/SpeedtypingGame"
import CurrencyConverter from "./Components/CurrencyConverter"
import FetchSwapi from "./Components/FetchSwapi"
import PictureShop from "./Components/PictureShop"
import {ContextProvider} from "./Components/PictureShop/DataContext"


import "./style.css"

function App() {
  return (
    <div id="app-div">
      <div id="header">
        <nav>
          <Link to="/"><h2 className="navlink">Home</h2></Link>
          <Link to="/speed-game"><h2 className="navlink">Speedtyping Game</h2></Link>
          <Link to="/curr-converter"><h2 className="navlink">Currency Converter</h2></Link>
          <Link to="/fetch-swapi"><h2 className="navlink">Star Wars API</h2></Link>
          <Link to="/picture-shop/browse"><h2 className="navlink">Picture Shop</h2></Link>
        </nav>
      </div>

      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/speed-game">
          <SpeedtypingGame />
        </Route>

        <Route path="/curr-converter">
          <CurrencyConverter />
        </Route>

        <Route path="/fetch-swapi">
          <FetchSwapi />
        </Route>

        <Route path="/picture-shop/browse">
          <ContextProvider>
            <Router>
              <PictureShop />
            </Router>
          </ContextProvider>
        </Route>

      </Switch>
    </div>
  )
}

export default App
