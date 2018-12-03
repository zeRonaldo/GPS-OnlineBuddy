import React, { Fragment} from 'react';
import UserSingle from './UserSingle';

const ListFriends = (props) => {
        const {listSize} = props;

        for(let i = 0 ; i < listSize; i++ ){
                    
        }
        return(
            <Fragment> 
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
                <UserSingle/>
            </Fragment>
        )
}

    
export default ListFriends;