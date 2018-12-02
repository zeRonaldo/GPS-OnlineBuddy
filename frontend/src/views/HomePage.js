import React, { Component, Fragment } from 'react';
import SplashPage from './SplashPage';
import LoggedPage from './LoggedPage';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
class LoginPage extends Component{
    state = {
        logedIn: true
    }

    render(){
        const {logedIn} = this.state;
        let content ='';
        if(logedIn){
            content = <LoggedPage/>
        }else{
            content = <Fragment>
                        <SplashPage/>
                        <Footer/>
                    </Fragment>
        }

        return (
            <Fragment>
                <Header></Header>
                {content}
                
            </Fragment>
        )
    }
}

    
export default LoginPage;