
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

async function main() {

    // Add Firebase project configuration object here
    var firebaseConfig = {
        apiKey: "AIzaSyAJbthdRS_BVITh9KWkZRFq2WL5XR745rw",
        authDomain: "fir-code-lab-c1fa2.firebaseapp.com",
        projectId: "fir-code-lab-c1fa2",
        storageBucket: "fir-code-lab-c1fa2.appspot.com",
        messagingSenderId: "181873501847",
        appId: "1:181873501847:web:7bdb287817b09812f9abd2",
        measurementId: "G-4CG8CYZMS9"
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