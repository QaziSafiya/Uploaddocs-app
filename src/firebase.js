
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDmOKRg5zgAMY1cK1Q4KkN3qbbkpXMw6aE",
    authDomain: "drive-clone-da445.firebaseapp.com",
    projectId: "drive-clone-da445",
    storageBucket: "drive-clone-da445.appspot.com",
    messagingSenderId: "292420457128",
    appId: "1:292420457128:web:4cb72884f96b7b5c5ae89d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const storage = firebase.storage()
  const auth =firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export{db ,storage ,auth ,provider}