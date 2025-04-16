// Template for the Firebase config.
//
// Copy this to firebase-config.js and drop in your own values from the Firebase
// console (Project settings > Your apps > SDK setup and configuration).
// firebase-config.js is gitignored, so your real values never get committed.
//
// The web API key is fine to ship in client code, it just identifies the
// project. What actually protects your data is the Security Rules plus API key
// restrictions in Google Cloud. Keeping the config in its own ignored file also
// makes it easy to point the app at a different project later.
var firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
