import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import GamePage from './views/GamePage';
import SearchPage from './views/SearchResults';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import Header from './templates/Header';
import Footer from './templates/Footer';
import logo from './logo.svg';
import {isLogged, doLogout} from './services/auth'


class App extends Component {
  state = {
    isLogged: false
  }

  componentDidMount(){
    this._isLogged()
  }

  _isLogged = async () => {
    try{
       await isLogged ();
      this.setState({
        isLogged:true
      })
    }catch(e){
      this.setState({ 
        isLogged:false
      })
    }
  }

  _logout = async () => {
    try{
      await doLogout()
      await this._isLogged()
    }catch (e){
      console.log(e)
    }
  }

  render() {
    return (
      <div className="full-page">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/search/" component={SearchPage}/>
        <Route exact path="/user/" component={UserPage}/>
        <Route exact path="/game/" component={GamePage}/>
      </div>
    );
  }
}

export default App;
