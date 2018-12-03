import firebase from 'firebase'
import '@firebase/firestore'

let config = { 
        apiKey: "AIzaSyBG4Cjk-rR3SpIafNnWmEPJHHvL_-8sqis",
        authDomain: "gps-onlinebuddy.firebaseapp.com",
        databaseURL: "https://gps-onlinebuddy.firebaseio.com",
        projectId: "gps-onlinebuddy",
        storageBucket: "gps-onlinebuddy.appspot.com",
        messagingSenderId: "973321408859"
};

//Iniciando a ligação com o firebase
const app = firebase.initializeApp(config);

//Separando os serviços
export const auth = app.auth();
export const db = app.firestore();
