import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     databaseURL: import.meta.env.VITE_databaseURL,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
// };


const firebaseConfig = {
    apiKey: "AIzaSyCYq9ZGhxTR_I0qg_hNXsFrKekPZ9Q7Stw",
    authDomain: "messanger-f2968.firebaseapp.com",
    projectId: "messanger-f2968",
    storageBucket: "messanger-f2968.appspot.com",
    messagingSenderId: "989820977567",
    appId: "1:989820977567:web:86fc604bfe56d6b4e2bdaa",
    measurementId: "G-3SVE7ELW0K"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth