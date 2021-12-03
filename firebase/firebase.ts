import { getDatabase } from '@firebase/database'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getStorage} from 'firebase/storage'

import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC8YeAdBXSeoAo0-aQcidKtsqXieFNTUMk",
  authDomain: "portfolio-art-37dcb.firebaseapp.com",
  projectId: "portfolio-art-37dcb",
  storageBucket: "portfolio-art-37dcb.appspot.com",
  messagingSenderId: "522445517446",
  appId: "1:522445517446:web:de977c480aa080bbd95707",
  databaseURL: "https://portfolio-art-37dcb-default-rtdb.firebaseio.com/",
  measurementId: "G-6HYVCT01QV"
}

export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)