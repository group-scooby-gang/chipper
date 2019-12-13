import firebase from "firebase/app"
import "firebase/storage"


const config = {
    apiKey: "AIzaSyB8XQ8MNB-mkCmGMcPqP6q8v_Jx6EVgXhM",
    authDomain: "chipper-b4eeb.firebaseapp.com",
    databaseURL: "https://chipper-b4eeb.firebaseio.com",
    projectId: "chipper-b4eeb",
    storageBucket: "chipper-b4eeb.appspot.com",
    messagingSenderId: "630726993619",
    appId: "1:630726993619:web:b8bf1aaefc1661f5c51626",
    measurementId: "G-R0X7P3N7EW"
}



firebase.initializeApp(config)

const storage = firebase.storage();


export {
    storage, firebase as default
}