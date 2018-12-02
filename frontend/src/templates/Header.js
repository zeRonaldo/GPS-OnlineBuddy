import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


  class Header extends React.Component {
    state = {
        isLogged: false
    }
  
    render() {
        let content;
        if(this.state.isLogged){
            content = <Fragment>Logado</Fragment>
        }else{
            content = <Fragment>
                Nops
            </Fragment>
        }
        return (
            <header>{content}</header>
        );
    }
  }
  
  export default Header;