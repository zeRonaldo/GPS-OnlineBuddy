import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import UserSearchResult from '../templates/UserSearchResult';
import GameSearchResult from '../templates/GameSearchResult';


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
                            <UserSearchResult/>
                            <UserSearchResult/>
                            <UserSearchResult/>
                            <UserSearchResult/>
                            <UserSearchResult/>
                        </section>
                        <section className="games">
                            <h4>Games</h4>
                            <GameSearchResult/>
                            <GameSearchResult/>
                            <GameSearchResult/>
                            <GameSearchResult/>
                            <GameSearchResult/>
                            <GameSearchResult/>
                            <GameSearchResult/>
                        </section>
                    </section>
                </div>
                <Footer/>
            </Fragment>
            
        );
    }
  }
  
  export default SearchResults;