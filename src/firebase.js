import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCTEwsLS4fPrMoI0gSJRNIDzVee7UEZcJQ",
    authDomain: "auth-node-21155.firebaseapp.com",
    projectId: "auth-node-21155",
    storageBucket: "auth-node-21155.appspot.com",
    messagingSenderId: "887353618353",
    appId: "1:887353618353:web:ea8304ef5369098e955790",
    measurementId: "G-G9KS19EYZY"
})

export const auth = app.auth()
export default app