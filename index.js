
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

async function main() {

    // Add Firebase project configuration object here
    var firebaseConfig = {
        apiKey: "AIzaSyC0UY_D8L27PoXbCNGbMhHFDPeyFTnK3Xc",
        authDomain: "fir-rtc-d62fd.firebaseapp.com",
        projectId: "fir-rtc-d62fd",
        storageBucket: "fir-rtc-d62fd.appspot.com",
        messagingSenderId: "971433442353",
        appId: "1:971433442353:web:1954283a797b2486c8e910",
        measurementId: "G-LVDDMKT9PZ"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // FirebaseUI config
    const uiConfig = {
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [
            // Email / Password Provider.
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // Handle sign-in.
                // Return false to avoid redirect.
                return false;
            }
        }
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    startRsvpButton.addEventListener("click",
        () => {
            ui.start("#firebaseui-auth-container", uiConfig);
        });
}
main();