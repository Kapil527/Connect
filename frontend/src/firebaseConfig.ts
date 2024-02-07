import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdB3r9z-MAqCib8xu0GD_Is1IQG0c-CDY",
    authDomain: "connect-47064.firebaseapp.com",
    projectId: "connect-47064",
    storageBucket: "connect-47064.appspot.com",
    messagingSenderId: "843033801623",
    appId: "1:843033801623:web:3c2c171cc33fb56d068ad2",
    measurementId: "G-XJHH89LKPJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);