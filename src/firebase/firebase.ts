import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  getDatabase,
  push,
  ref,
  set,
  get,
  update,
  remove,
  onValue,
  query,
  equalTo,
  orderByChild,
  child,
  off
} from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAilsAf1CsNHrwQwPCZaAmo_g4rVZGJWNg',
  authDomain: 'web-portfolio-v3.firebaseapp.com',
  projectId: 'web-portfolio-v3',
  storageBucket: 'web-portfolio-v3.appspot.com',
  messagingSenderId: '68759221088',
  appId: '1:68759221088:web:b61a347f904f3b975d2405'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const database = getDatabase(app)

export {
  app,
  auth,
  database,
  push,
  ref,
  set,
  get,
  update,
  remove,
  query,
  equalTo,
  child,
  orderByChild,
  onValue,
  off,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}
