import { initializeApp } from "firebase/app"
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPM3jo348AkEE84Wevm7ZuXz1YDOfX24s",
  authDomain: "react-notes-app-8bf31.firebaseapp.com",
  projectId: "react-notes-app-8bf31",
  storageBucket: "react-notes-app-8bf31.appspot.com",
  messagingSenderId: "541879381853",
  appId: "1:541879381853:web:8fd87d63930ef50fb702b4"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")