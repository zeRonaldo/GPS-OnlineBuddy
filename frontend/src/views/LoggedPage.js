import React from 'react';
import ListFriends from '../templates/ListFriends';
import ListGames from '../templates/ListGames';
import ListEvals from '../templates/ListEvals';
import NoPic from '../res/no-pict.png';
const LoggedPage = props => {
    return (
        <div className="content">
            
           <section className="profile-info">
                <div className="picture"><img alt="profile-pic" src={NoPic}></img></div>
                <div className="identity">
                    <h1>Nome do Usuário</h1>
                    <h3>nome real</h3>
                    <p>Cidade - Estado</p>
                </div>
                <div className="actions">
                    <div className="evaluate-user">****</div>
                    <div className="button">Adcionar Usuário</div>
                    <div className="button">Desfazer Amizade</div>
                </div>
           </section>
           <section className="profile-details">
                <div className="half">
                    <section className="bio">
                    <h4>Sobre mim</h4>
                        <div className="section-content">
                                <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis egestas tortor, at euismod massa pretium a. Vivamus rhoncus nec mi eget fermentum. Fusce egestas, urna sit amet tincidunt pharetra, est justo elementum orci, a ullamcorper mauris augue eget nisl. Aliquam vulputate nunc efficitur mi ullamcorper, ut elementum urna finibus.
                                </p>
                        </div>
                       
                    </section>
                    <section className="friends">
                    <h4>Amigos</h4>
                        <div className="section-content">
                            <ListFriends/>  
                        </div>
                        
                    </section>
                    <section className="games">
                        <h4>Jogos de interesse</h4>
                        <div className="section-content">
                            <ListGames/>    
                        </div>
                        
                    </section>
                </div>
                <div className="half">
                    <section className="eval">
                        <h4>Avaliações</h4>
                        <div className="section-content">
                            <ListEvals />    
                        </div>
                        
                    </section>
                </div>
               
           </section>
        </div>
        
    )
}

export default LoggedPage