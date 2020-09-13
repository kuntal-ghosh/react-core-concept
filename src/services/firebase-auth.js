import firebaseConfig from "../firebase.config";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
// import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(
      (result) => result

      // {
      //   console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      //   var token = result.credential.accessToken;
      // The signed-in user info.
      //   var user = result.user;
      // ...
      //   return result;
      // }
    )
    .catch(
      (error) => error
      // {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      //   // ...
      //   console.log(errorMessage);
      //   //   return error;
      // }
    );
}

function googleSignOut() {
  firebase
    .auth()
    .signOut()
    .then(function (response) {
      // Sign-out successful.
      // console.log("sign out successfully");
      return response;
    })
    .catch(function (error) {
      // An error happened.
      return error;
    });
}

export { googleSignOut, googleSignIn };
