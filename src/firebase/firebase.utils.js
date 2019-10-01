import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDuM8YWS1XN4ugFynYjH6sKqAw0PNJB3Aw",
  authDomain: "store-db-2d69f.firebaseapp.com",
  databaseURL: "https://store-db-2d69f.firebaseio.com",
  projectId: "store-db-2d69f",
  storageBucket: "",
  messagingSenderId: "934089289874",
  appId: "1:934089289874:web:7d7259a5129332ed2b764b",
  measurementId: "G-JCNCLPT28Q"
}


export const createUserProfileDocument = async(userAuth, additionalData) =>{ 
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;