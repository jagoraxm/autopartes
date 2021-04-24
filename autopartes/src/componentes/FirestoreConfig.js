import firebase from 'firebase';    

firebase.initializeApp({
    apiKey: "AIzaSyCpA00XbxLLWKIfTrJxXc8mD4EzfgOVJxM",
    authDomain: "autopartes-94475.firebaseapp.com",
    databaseURL: "https://autopartes-94475.firebaseio.com",
    projectId: "autopartes-94475",
    storageBucket: "autopartes-94475.appspot.com",
    messagingSenderId: "1096965711357"
}); 
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
//const settings = { timestampsInSnapshots: true };
//const firestore = firebase.firestore();
//firestore.settings(settings);
export default firebase;