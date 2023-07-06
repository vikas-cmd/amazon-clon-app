// import firebase from 'firebase';
import firebase from 'firebase/compat/app';


import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import 'firebase/compat/firestore';
// ... and other Firebase modules you need


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBPIW7i43_Z2CrmrK6z6vCM2sLLDbV_os",
    authDomain: "e-clone-app-aab05.firebaseapp.com",
    databaseURL:"https://e-clone-app-aab05.firebaseio.com",
    projectId: "e-clone-app-aab05",
    storageBucket: "e-clone-app-aab05.appspot.com",
    messagingSenderId: "536939729614",
    appId: "1:536939729614:web:324d5ffe18da2ca0afb69f",
    measurementId: "G-82DL2NFGZM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};