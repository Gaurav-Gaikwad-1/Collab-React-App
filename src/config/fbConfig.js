  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB0bMAACnfe72IFj0hfu6aHvsqlyvch5CA",
    authDomain: "collab-reactapp.firebaseapp.com",
    databaseURL: "https://collab-reactapp.firebaseio.com",
    projectId: "collab-reactapp",
    storageBucket: "collab-reactapp.appspot.com",
    messagingSenderId: "145595461157",
    appId: "1:145595461157:web:556e0d34cd079e8d4319cc",
    measurementId: "G-M899FDQ8G0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots:true });  //this initializes firestore and add on settings & inside settings we pass an property called timestampsinSnapshots and set it true so this was justa update in firebase library which changes how firebase with time stamps
  firebase.firestore().settings({});

  export default firebase;