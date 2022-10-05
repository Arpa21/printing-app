import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "printing-app-81800.firebaseapp.com",
  projectId: "printing-app-81800",
  storageBucket: "printing-app-81800.appspot.com",
  messagingSenderId: "785767168471",
  appId: "1:785767168471:web:8b9f69999253952b747392",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
