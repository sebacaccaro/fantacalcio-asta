import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
console.log(auth);

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(res => {
      console.log('k');
    })
    .catch(e => {
      console.log(e.message);
    });
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(res => {
      console.log('k');
    })
    .catch(e => {
      console.log(e.message);
    });
};

export const firestore = firebase.firestore();
export default firebase;
