import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyDotqVdJVAszOeBqzVNNTEEckzd4VrWgsk",
    authDomain: "mindfit-9952f.firebaseapp.com",
    projectId: "mindfit-9952f",
    storageBucket: "mindfit-9952f.appspot.com",
    messagingSenderId: "229962485394",
    appId: "1:229962485394:web:5f6c3138147a49fa95204b",
    measurementId: "G-BKEN3473XW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app);

export { auth, functions };
