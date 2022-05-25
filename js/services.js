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
  apiKey: "AIzaSyAFTfrGo2FAExHNFB1EsRzXuow78Xz4V90",
  authDomain: "culture-care-3c32a.firebaseapp.com",
  projectId: "culture-care-3c32a",
  storageBucket: "culture-care-3c32a.appspot.com",
  messagingSenderId: "655438489888",
  appId: "1:655438489888:web:e7895eb508ba7450480f45",
  measurementId: "G-ZZCH79MSX8"
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

  const add_after_me = document.getElementById('add_after_me');

  // Run query
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      const html = `
       <div class="card">
       <div class="card-container">
           <h1>${doc.data()['First Name']}<br>
           <h3>Contact Details</h3>
           <p>${doc.data()['Preferred Contact']}</p><br>
           <h3>Availability</h3>
           <p>${doc.data()['Availability']}</p><br>
           <h3>Services</h3>
           <p>${doc.data()['Services']}</p>

       </div>
       </div><br>`

      add_after_me.insertAdjacentHTML("afterend", html);
      console.log(doc.id, " => ", doc.data());
    });
  });
}
