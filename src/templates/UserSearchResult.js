import React, { Fragment} from 'react';
import NoPic from '../res/no-pict.png';

const  UserSearchResult = (props) => {
        const {listSize} = props;
        
        for(let i = 0 ; i < listSize; i++ ){
                    
        }
        return(
            <div className="game-picture-resumed"> 
              <a href="/user/">
                  
                  <img src={NoPic} alt="game-cover"></img>
                  <div className="resumed-info">
                    <h5>@userTag <br></br> Nome do Usuário - *****</h5>
                    <p>Cidade - Estado</p>
                  </div>
                  
              </a>
            </div>
        )
}

    
export default UserSearchResult;