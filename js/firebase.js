import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
// import { analytics } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js'
import { auth } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
import { firestore } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyDT0Sd55G-IaTA3N--_VQ4n_uMaYWxd4S0",
  authDomain: "culture-care-pwa.firebaseapp.com",
  projectId: "culture-care-pwa",
  storageBucket: "culture-care-pwa.appspot.com",
  messagingSenderId: "191677666535",
  appId: "1:191677666535:web:7a5dd47efc0afd57873e42"
};

const app = firebase.initializeApp(firebaseConfig);
