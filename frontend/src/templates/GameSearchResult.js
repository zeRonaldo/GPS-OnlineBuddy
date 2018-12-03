import React, { Fragment} from 'react';
import NoPic from '../res/no-pict.png';

const  GameSearchResult = (props) => {
        const {listSize} = props;
        
        for(let i = 0 ; i < listSize; i++ ){
                    
        }
        return(
            <div className="game-picture-resumed"> 
              <a href="/game/">
                  
                  <img src={NoPic} alt="game-cover"></img>
                  <div className="resumed-info">
                    <h5>Nome do jogo - ****</h5>
                    <p>Ano - Produtora</p>
                  </div>
                  
              </a>
            </div>
        )
}

    
export default GameSearchResult;
