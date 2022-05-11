import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBJwbqK_N6bHu0ssGA1pVKvzRPg2DfQk0c',
  authDomain: 'connected-home-systems-713cb.firebaseapp.com',
  projectId: 'connected-home-systems-713cb',
  storageBucket: 'connected-home-systems-713cb.appspot.com',
  messagingSenderId: '338388480826',
  appId: '1:338388480826:web:c266acc0af3cceb2545603',
  measurementId: 'G-RN1XJBJJ01',
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
