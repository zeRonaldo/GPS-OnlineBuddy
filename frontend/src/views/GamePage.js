import React, { Fragment} from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

const GamePage = () => {
        
        return(
            <Fragment> 
                <Header/>
                <div className="content">
                    <h1>0</h1>
                </div>
                <Footer/>
            </Fragment>
        )
}

    
export default GamePage;