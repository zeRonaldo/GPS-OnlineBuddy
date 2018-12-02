import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


  class Header extends React.Component {
    state = {
        isLogged: true
    }
  
    render() {
        let content;
        if(this.state.isLogged){
            content = <Fragment>
                <div className="brand">
                    <a>OnlineBuddy</a>
                </div>
                <div className="center">
                    <form>
                        <input name="search" type="text" placeholder="Search..."></input>
                    </form>
                </div>
                <div className="right">
                    <a className="header-button">Logout</a>
                    
                </div>
            </Fragment>
        }else{
            content = <Fragment>
                <div className="brand">
                    <a>OnlineBuddy</a>
                </div>
                <div className="right">
                    <a className="header-button">Login</a>
                    <a className="header-button">Sign-In</a>
                </div>
            </Fragment>
        }
        return (
            <header>{content}</header>
        );
    }
  }
  
  export default Header;