export default function loggedUserReducer ( state = '', {type, payload}){
    switch(type){
        case 'login':
            return payload;
    }

    return state;
}