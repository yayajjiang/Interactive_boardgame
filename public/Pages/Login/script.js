function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password') {
      window.location.href = '/Pages/UserPage/index.html';
    } else {
      alert('Invalid username or password');
    }
  }
  
function SignUp() {
  window.location.href = '/Pages/SignUp/index.html';
}