import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'space-1a5ba.firebaseapp.com',
  databaseURL: 'https://space-1a5ba.firebaseio.com',
  projectId: 'space-1a5ba',
  storageBucket: 'space-1a5ba.appspot.com',
  messagingSenderId: '578078389588',
  appId: '1:578078389588:web:03496c6d427a6ebadac4c1',
  measurementId: 'G-3MYEP1FG2C',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
