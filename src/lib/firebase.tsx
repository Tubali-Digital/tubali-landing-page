
// const firebaseConfig = {
//     apiKey: "AIzaSyBBy2_c-dIshazL4Lo4gfop8cuGxfHwAmI",
//     authDomain: "tubali.firebaseapp.com",
//     projectId: "tubali",
//     storageBucket: "tubali.firebasestorage.app",
//     messagingSenderId: "39142563758",
//     appId: "1:39142563758:web:0fe52c273ae4183bf5323f"
// };



import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, getDocs, doc } from "firebase/firestore";

// Your Firebase Config (from Firebase Console)
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBBy2_c-dIshazL4Lo4gfop8cuGxfHwAmI",
    authDomain: "tubali.firebaseapp.com",
    projectId: "tubali",
    storageBucket: "tubali.firebasestorage.app",
    messagingSenderId: "39142563758",
    appId: "1:39142563758:web:0fe52c273ae4183bf5323f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, deleteDoc, getDocs, doc };
