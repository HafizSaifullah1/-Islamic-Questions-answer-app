// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, onValue, set, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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

var questionParent = document.getElementById("questionParent")

var question = [];

function renderQuestion() {

    questionParent.innerHTML = ``;
    for (var i = 0; i < question.length; i++) {

        var obj = question[i];
        questionParent.innerHTML += `<div onclick="cardClick('${obj.id}')" class=" cursorCard bg-white rounded shadow border border-2 border-secondary-subtle p-3 mb-2">
<div>
<p class="text-secondary fs-5 m-0 p-0">  <i class="fa-solid fa-user"></i>${obj.user}</p>
</div>
        
        <p class="m-0 p-0 pt-1">${obj.question}</p>
        <div class="py-2">
        <p class="m-0 p-0 pt-1">Total Answer : 786</p>
        </div>
        </div>
        `
    }
};

function getData() {
    var reference = ref(db, "question")
    onValue(reference, function (dt) {
        question = Object.values(dt.val());
        renderQuestion();
    })

};

getData()

window.cardClick = function (id) {
    localStorage.setItem("queId", id)
    window.location.assign("../pages/question/question.html")

}