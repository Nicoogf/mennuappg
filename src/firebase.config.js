import { getApp , getApps , initializeApp } from "firebase/app" ;
import { getFirestore } from "firebase/firestore" ;
import { getStorage } from "firebase/storage" ;


const firebaseConfig = {
    apiKey: "AIzaSyC2AhJdKgv2Ck2r9dBNPgw5Tbb4DZLiQuI",
    authDomain: "menuapp-cbf1d.firebaseapp.com",
    databaseURL: "https://menuapp-cbf1d-default-rtdb.firebaseio.com",
    projectId: "menuapp-cbf1d",
    storageBucket: "menuapp-cbf1d.appspot.com",
    messagingSenderId: "1003411130694",
    appId: "1:1003411130694:web:4aa1cb607905f3c49f3d47"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig) ;

  const firestore = getFirestore(app)
  const storage = getStorage(app)


  export {app , firestore , storage }  ;