import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdZlcnM3LjX1umB3ms6B99mKa--uYiLR8",
    authDomain: "auth-integration-71bf1.firebaseapp.com",
    projectId: "auth-integration-71bf1",
    storageBucket: "auth-integration-71bf1.appspot.com",
    messagingSenderId: "792184676408",
    appId: "1:792184676408:web:7c88fe30f9b053eb7586cd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;