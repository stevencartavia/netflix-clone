import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDM2h6iPkf8IhtB5Rhg3E7Wvqt0f_-Wtsg",
    authDomain: "netflix-clone-a4622.firebaseapp.com",
    projectId: "netflix-clone-a4622",
    storageBucket: "netflix-clone-a4622.appspot.com",
    messagingSenderId: "98720834346",
    appId: "1:98720834346:web:440bd1b370db5c905e3453"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {auth}
export default db;