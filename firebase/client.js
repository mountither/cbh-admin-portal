import { getAuth, setPersistence, browserLocalPersistence} from '@firebase/auth';
import { initializeApp, getApps } from "firebase/app"
import { getFirestore} from 'firebase/firestore';
import { getFunctions } from "firebase/functions";

import '@firebase/firestore'
import '@firebase/auth'
import {getStorage } from '@firebase/storage';

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

//you don't need to check if Firebase is already initialized in this new SDK. 

let firebaseClient;

if (!getApps().length) {
  firebaseClient = initializeApp(clientCredentials)
}

export const firestore = getFirestore(firebaseClient);

export const functions = getFunctions(firebaseClient, 'australia-southeast1');

export const auth = getAuth(firebaseClient)

export const storage = getStorage(firebaseClient);

setPersistence(auth, browserLocalPersistence)