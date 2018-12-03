export default  function viewUserReducer ( state = '', {type, payload}){
    switch(type){
        case 'view_user':
            return payload;
    }

    return state;
}