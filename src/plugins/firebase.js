import Firebase from "firebase";
var firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyA1dfFZfziaqIbLpTdHSWw3-tUwBsnlSiw",
  authDomain: "vocab-e1163.firebaseapp.com",
  databaseURL:
    "https://vocab-e1163-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vocab-e1163",
  storageBucket: "vocab-e1163.appspot.com",
  messagingSenderId: "452569342327",
  appId: "1:452569342327:web:2442781fa4d9f16e938172",
  measurementId: "G-X1K9J05NBX",
});
var db = firebaseApp.database();

const vocab = db.ref("vocab")

export {
  vocab
}
