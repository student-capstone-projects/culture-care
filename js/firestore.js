import {
  initializeApp
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
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

// collection ref
const providersRef = collection(db, 'Providers')

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get all providers that offer service from app
window.onload = () => {

  // Create a query against the collection.
  const service = capitalizeFirstLetter(localStorage.getItem('service'))
  const q = query(providersRef, where("Services", "array-contains", service));

  // Run query
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });
}
