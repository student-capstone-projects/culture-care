window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceworker.js");
  }

};


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { auth } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'


const firebaseConfig = {
  apiKey: "AIzaSyDT0Sd55G-IaTA3N--_VQ4n_uMaYWxd4S0",
  authDomain: "culture-care-pwa.firebaseapp.com",
  projectId: "culture-care-pwa",
  storageBucket: "culture-care-pwa.appspot.com",
  messagingSenderId: "191677666535",
  appId: "1:191677666535:web:7a5dd47efc0afd57873e42"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()


// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

// logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})





// collection ref
const colRef = collection(db, 'Providers')




