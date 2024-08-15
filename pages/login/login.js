// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsoxgIrVrX3Pc_fnAJx-lBusJl2nslOrg",
    authDomain: "newque-86541.firebaseapp.com",
    databaseURL: "https://newque-86541-default-rtdb.firebaseio.com",
    projectId: "newque-86541",
    storageBucket: "newque-86541.appspot.com",
    messagingSenderId: "1091907790870",
    appId: "1:1091907790870:web:b6128fadbba46f0ea56d37",
    measurementId: "G-D76PBYFK7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();




let email = document.getElementById("email")
let password = document.getElementById("password")


window.login = function () {

    let obj = {
        email: email.value,
        password: password.value
    }
    console.log(obj)


    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (res) {

            alert("welcom", res)
            window.location.assign("/index.html")
        })
        .catch(function (err) {
            alert("error", err)
        })
}