import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../templates/Header';
import Footer from '../templates/Footer';


  class SearchResults extends React.Component {
    state = {
        isLogged: false
    }
  
    render() {
        
        return (
            <Fragment>
                <Header/>
                <div className="content">
                    <section className="tabs">
                        <button>Todos</button>
                        <button>Usuários</button>
                        <button>Games</button>
                    </section>
                    <section className="results">
                        <section className="profiles">
                            <h4>Usuários</h4>
                        </section>
                        <section className="games">
                            <h4>Games</h4>
                        </section>
                    </section>
                </div>
                <Footer/>
            </Fragment>
            
        );
    }
  }
  
  export default SearchResults;