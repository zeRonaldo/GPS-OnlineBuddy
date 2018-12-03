import React, { Fragment} from 'react';
import NoPic from '../res/no-pict.png';

const  EvalSingle = (props) => {
        const {listSize} = props;
        
        for(let i = 0 ; i < listSize; i++ ){
                    
        }
        return(
            <div className="evaluation"> 
              <div className="header">
                <h3>Título da avalição</h3>
                <div>****</div>
              </div>
              <div className="body">
                <p>Vivamus rhoncus nec mi eget fermentum. Fusce egestas, urna sit amet tincidunt pharetra, est justo elementum orci, a ullamcorper mauris augue eget nisl. Aliquam vulputate nunc efficitur mi ullamcorper, ut elementum urna finibus.</p>
              </div>
              <div className="footer">
                <div className="info">
                    <a href="/user/"><h5>@userTag</h5></a>
                    <p>01-01-2019</p>
                </div>
                <a href="/user/"><img src={NoPic} alt="profile-picture"></img></a>
              </div>
            </div>
        )
}

    
export default EvalSingle;