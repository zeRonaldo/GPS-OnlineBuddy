export default function viewGameReducer ( state = '', {type, payload}){
    switch(type){
        case 'view_game':
            return payload;
    }

    return state;
}