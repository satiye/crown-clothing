import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBdmwmzusHz5cuj7TDc12xmXoW4jr4A2k",
    authDomain: "crwn-db-1c823.firebaseapp.com",
    projectId: "crwn-db-1c823",
    storageBucket: "crwn-db-1c823.appspot.com",
    messagingSenderId: "239773130483",
    appId: "1:239773130483:web:0323e57dca588eee25a186",
    measurementId: "G-LRTL5FX72T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;