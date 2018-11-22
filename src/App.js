import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Navbar from "./container/navbar";
import Login from "./container/sinup_and_login/login";
import Signup from "./container/sinup_and_login/signup";
import ChangePassword from "./container/sinup_and_login/change_password";
import Home from "./container/home/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className={'col-md-12'}>
            <Switch>
              <Route exact path='/' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/home' component={Home} />
            <Route exact path='/passwordChange' component={ChangePassword} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
