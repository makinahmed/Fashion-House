import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFireBaseApp = ()=> initializeApp(firebaseConfig);
export default initializeFireBaseApp;