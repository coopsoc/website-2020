import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home'
import Team from './Team'
import Logo from './img/logo_small.png'

function Header() {

  return (
    <Router>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container">
                <Link to="/"><img src={Logo} width="60px"></img></Link>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger" to="/Team">Team</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger" to="/Team">Publications</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger" to="/Team">Charity</Link>
                    </li>
                    </ul>
                </div>
                </div>
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