import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseKey = process.env.REACT_APP_API_KEY

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "foodbriiite-auth.firebaseapp.com",
  projectId: "foodbriiite-auth",
  storageBucket: "foodbriiite-auth.appspot.com",
  messagingSenderId: "c1072920995415",
  appId: "1:1072920995415:web:c8813fc87831b232ef2512",
  measurementId: "G-Y6NFZJ6Z2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth, app };