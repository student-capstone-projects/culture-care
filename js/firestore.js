
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Providers')
