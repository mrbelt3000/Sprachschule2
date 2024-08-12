<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBGw0hc-Yzj1i_2iwz2HuDP_hmXmq_0uGY",
    authDomain: "sprach1.firebaseapp.com",
    projectId: "sprach1",
    storageBucket: "sprach1.appspot.com",
    messagingSenderId: "243886264051",
    appId: "1:243886264051:web:558924151f7210e9947186",
    measurementId: "G-MX91P51P66"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//inputs
const email = document.getElementById('email').value;
const password =  document.getElementById('password').value;

//submit
const submit=  document.getElementById('submit');
submit.addEventlistener("click",function(event){
event.preventDefault()
  alert(5)
})


  


</script>
