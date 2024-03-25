
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_3hj3YPRxqgCdu4V-AIeg4se7zIHODMY",
  authDomain: "tarefas-5f881.firebaseapp.com",
  projectId: "tarefas-5f881",
  storageBucket: "tarefas-5f881.appspot.com",
  messagingSenderId: "33442667713",
  appId: "1:33442667713:web:72b3f508ac70561b63c840"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };