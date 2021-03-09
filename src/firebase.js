import firebase from 'firebase/app'
import 'firebase/auth'


var app = firebase.initializeApp({
    apiKey: "AIzaSyB462Oz_X1C5isHAbO6qfjweMHZnCqeTcU",
    authDomain: "collablearning-f831a.firebaseapp.com",
    projectId: "collablearning-f831a",
    storageBucket: "collablearning-f831a.appspot.com",
    messagingSenderId: "725745324654",
    appId: "1:725745324654:web:195f790663c4f390554c7f"
});

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });
  
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');

  login.addEventListener('click', e => {
      const email = email.value;
      const pass = password.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e=> console.log(e.message))
  })
  signup.addEventListener('click', e=>{
    const email = email.value;
    const pass = password.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message))

    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        } else{
            console.log('not logged in');
        }
    })

    logout.addEventListener('click', e => {
        firebase.auth().signOut();
    })



export default auth



