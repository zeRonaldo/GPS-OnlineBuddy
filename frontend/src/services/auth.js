import {auth} from '../settings/firebaseSettings';

export const isLogged = async () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if (user)
            resolve(user)
            else 
            reject(false)
        })
    })
    
}

export const doLogin = async (email, pass ) => {
    try{
        return await auth.signInAndRetrieveDataWithEmailAndPassword(email,pass);
    }catch(e){
        throw e
    }
}

export const doLogout = async () => {
    try{
        return await auth.signOut()
    }catch(e){
        console.log(e)
    }
}