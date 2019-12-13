import firebase from "firebase/app"
import "firebase/storage"
const {REACT_FIREBASE_KEY, REACT_AUTH, REACT_DB_URL, REACT_PROJ_ID, REACT_STORAGE_BUCKET, REACT_SENDING_ID, REACT_APP_ID, REACT_MEASUREMENT} = process.env;


const config = {
    apiKey: REACT_FIREBASE_KEY,
    authDomain: REACT_AUTH,
    databaseURL: REACT_DB_URL,
    projectId: REACT_PROJ_ID,
    storageBucket: REACT_STORAGE_BUCKET,
    messagingSenderId: REACT_SENDING_ID,
    appId: REACT_APP_ID,
    measurementId: REACT_MEASUREMENT 
}



firebase.initializeApp(config)

const storage = firebase.storage();


export {
    storage, firebase as default
}