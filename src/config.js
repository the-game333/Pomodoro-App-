// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBguxg0_RS9FhWKEOtVBuFPFgsQD0Jr2XU",
  authDomain: "fir-auth-2a91b.firebaseapp.com",
  projectId: "fir-auth-2a91b",
  storageBucket: "fir-auth-2a91b.appspot.com",
  messagingSenderId: "102983114714",
  appId: "1:102983114714:web:5b4846072476b34d9a6ae3",
  measurementId: "G-92FVWRNF1W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};