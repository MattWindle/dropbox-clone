import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAGyNR5HZA7Y2EhOs0QDk4KLL_XSONwTg",
    authDomain: "dropbox-clone-88fec.firebaseapp.com",
    projectId: "dropbox-clone-88fec",
    storageBucket: "dropbox-clone-88fec.appspot.com",
    messagingSenderId: "468257178904",
    appId: "1:468257178904:web:334e043431a5d49b430a6d"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }