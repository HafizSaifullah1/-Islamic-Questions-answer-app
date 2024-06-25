// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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
const db = getDatabase();

var id = localStorage.getItem("queId")


var userInp = document.getElementById("userinp")
var answerInp = document.getElementById("answerinp")

var obj ={
    userInp:userInp.value,
    answerInp:answerInp.value,
    
}
console.log(obj)

var questionObj = {}

function getData(){
    var reference = ref(db, `question/${id}`)
    onValue(reference, function (data) {
        questionObj = data.val();
        // console.log(questionObj)
        question.innerHTML = questionObj.question
        user.innerHTML = questionObj.user
    })
};

getData();




window.addAnswer = function () {


}