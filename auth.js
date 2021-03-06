auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').onSnapshot(snapshot => {
      setupUI(user);
    }, err => console.log(err.message));
  } else {
    setupUI();
  }
});

function login(){
    // login
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.replace("profile.html")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    });
};






  