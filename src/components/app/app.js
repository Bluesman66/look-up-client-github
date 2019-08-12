import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LandingPage from '../landing-page';
import Page1 from '../page1';
import Page2 from '../page2';
import LoginPage from '../login-page';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './app.css';
import '../shared/transitions.css';

class App extends Component {

  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path='/' component={LandingPage} />
                <Route path='/page1' component={Page1} />
                <Route path='/page2' component={Page2} />
                <Route path='/login' component={LoginPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default withRouter(App);