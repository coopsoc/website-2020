import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home'
import Team from './Team'

function Header() {

  return (
    <Router>
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/Team">Team</Link></li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path="/Team"><Team /> </Route>
            <Route path="/"><Home /> </Route>
        </Switch>
      </Router>
  );
}

export default Header;