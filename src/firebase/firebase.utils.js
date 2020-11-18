/* eslint-disable no-template-curly-in-string */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARKOtLJswDuomnu0V4g6odZis7uHp2wVo",
    authDomain: "crown-db-c2ce3.firebaseapp.com",
    databaseURL: "https://crown-db-c2ce3.firebaseio.com",
    projectId: "crown-db-c2ce3",
    storageBucket: "crown-db-c2ce3.appspot.com",
    messagingSenderId: "129246985341",
    appId: "1:129246985341:web:665449295a166e11ba0514",
   // measurementId: "G-DMTN3MHB8B"
      
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc('users/${userAuth.uid}');
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName, email } = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData

            })

        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;