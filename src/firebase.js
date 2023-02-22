
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcKfEetoNxq2Ca4AkseWRzM9HaBxjrAh8",
  authDomain: "todo-app-9fc48.firebaseapp.com",
  projectId: "todo-app-9fc48",
  storageBucket: "todo-app-9fc48.appspot.com",
  messagingSenderId: "193267579991",
  appId: "1:193267579991:web:3160ce525039a007317712"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();  