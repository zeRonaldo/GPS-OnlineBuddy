import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import GamePage from './views/GamePage';
import SearchPage from './views/SearchResults';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import HomePage from './views/HomePage';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/search/" component={HomePage}/>
      </Fragment>
    );
  }
}

export default App;
