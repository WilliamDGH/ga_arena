import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD38foxgp_TbtaDBqY6i4gpCfGWpy7WKQs",
  authDomain: "gaarena-6eec5.firebaseapp.com",
  databaseURL: "https://gaarena-6eec5.firebaseio.com",
  projectId: "gaarena-6eec5",
  storageBucket: "gaarena-6eec5.appspot.com",
  messagingSenderId: "5333246057"
}

const fb = firebase.initializeApp(config)

export default fb
