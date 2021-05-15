import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home'
import Charity from './Charity'
import Events from './Events'
import Publications from './Publications'
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
                        <Link class="nav-link js-scroll-trigger" to="/Team">The Team</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger" to="/Events">Events</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger" to="/Publications">Publications</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link js-scroll-trigger" to="/Charity">Charity</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
        <Switch>
            <Route path="/Team"><Team /> </Route>
            <Route path="/Events"><Events /> </Route>
            <Route path="/Publications"><Publications /> </Route>
            <Route path="/Charity"><Charity /> </Route>
            <Route path="/"><Home /> </Route>
        </Switch>
      </Router>
  );
}

export default Header;