import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBYkrU-uQfMh4ggkMVe0c_3pAO87iiVjiQ",
    authDomain: "vue-firebase-sites-2ee30.firebaseapp.com",
    projectId: "vue-firebase-sites-2ee30",
    storageBucket: "vue-firebase-sites-2ee30.appspot.com",
    messagingSenderId: "832895501454",
    appId: "1:832895501454:web:23f4369da2fcb191c8b5df"
  };

// init firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export const db = getFirestore(firebaseApp);
export { projectFirestore, timestamp }