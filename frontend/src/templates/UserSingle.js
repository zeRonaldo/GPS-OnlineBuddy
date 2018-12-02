import React, { Fragment} from 'react';
import NoPic from '../res/no-pict.png'
const UserSingle = (props) => {
        const {listSize} = props;
        
        for(let i = 0 ; i < listSize; i++ ){
                    
        }
        return(
            <div className="profile-picture-resumed"> 
              <a>
                  <img src={NoPic} alt="profile-pic"></img>
                  <p>@userTag</p>
              </a>
            </div>
        )
}

    
export default UserSingle;