import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBv4URYaXzaD81duIReGjd6C9y5mYYtDow',
  authDomain: 'chs-db.firebaseapp.com',
  projectId: 'chs-db',
  storageBucket: 'chs-db.appspot.com',
  messagingSenderId: '26280138791',
  appId: '1:26280138791:web:af2d285e07cfe9d5b45602',
  measurementId: 'G-KSCQ1HRHX1',
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };

// Initialize Analytics and get a reference to the service
// const analytics = firebase.getAnalytics(app);
