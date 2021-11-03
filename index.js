// DOM elements
const loggedInLinks = document.querySelectorAll('.modal-login');
const profilecon = document.querySelector('.profile-data');

const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Name:  ${doc.data().name}</div>
        <div>Email:  ${user.email}</div>
        <div>Birth date: ${doc.data().birthday}</div>
        <div>Address: ${doc.data().address}</div>
      `;
      profilecon.innerHTML = html;
    });
  } else {
    // clear account info
    profilecon.innerHTML = '';
  }
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  

});