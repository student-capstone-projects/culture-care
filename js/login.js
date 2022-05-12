import {
  getAuth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'

import {
  initializeApp
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'

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
const auth = getAuth()

// Depending on action need these elements
const navLogin = document.getElementById('nav-login')
const signInUpOutForm = document.querySelector('.sign-in-up-out')

// Logging out user
const navLogout = document.getElementById('nav-logout')
navLogout.addEventListener('click', () => {
  preventDefault()
  signOut(auth)
    .then(() => {
      console.log('user signed out')
      navLogin.style.display = "block"
      navLogout.style.display = "none"
    })
    .catch(err => {
      console.log(err.message)
   })
})

// Registering new users
const signupButton = document.getElementById('sign-up')
signupButton.addEventListener('click', (e) => {
  e.preventDefault()

  const email = signInUpOutForm.email.value
  const password = signInUpOutForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signInUpOutForm.reset()
      navLogin.style.display = "none"
      navLogout.style.display = "block"
    })
    .catch(err => {
      console.log(err.message)
    })
})

// Signing in users
const signinButton = document.getElementById('sign-in')
signinButton.addEventListener('click', (e) => {
  e.preventDefault()

  const email = signInUpOutForm.email.value
  const password = signInUpOutForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      signInUpOutForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

// Reset password
const forgotPasswordButton = document.getElementById('forgot-password')
forgotPasswordButton.addEventListener('click', (e) => {

  const email = signInUpOutForm.email.value

  sendPasswordResetEmail(email)
  .then(function() {
     console.log('Password Reset Email Sent!');
     signInUpOutForm.reset()
  }).catch( err => {
     console.log(err.message);
  });
})
