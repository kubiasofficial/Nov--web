// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFvdYgKfHMklJxCe9NQtCCQqKHRnhtec",
  authDomain: "continental-rail-company.firebaseapp.com",
  projectId: "continental-rail-company",
  storageBucket: "continental-rail-company.appspot.com",
  messagingSenderId: "133375916121",
  appId: "1:133375916121:web:6ea2d951b1440b8177c8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);