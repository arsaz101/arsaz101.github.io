import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDNpMQYbSaFGPRhME5IdJT2YIfvty9kgP8',
  authDomain: 'ngh-corp-test.firebaseapp.com',
  projectId: 'ngh-corp-test',
  storageBucket: 'ngh-corp-test.appspot.com',
  messagingSenderId: '71880295956',
  appId: '1:71880295956:web:42ceddd379c2c0be53c901',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
