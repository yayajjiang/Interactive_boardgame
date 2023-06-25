function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password') {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('home-page').style.display = 'block';
      document.getElementById('user').textContent = username;
    } else {
      alert('Invalid username or password');
    }
  }
  
  function Singup() {
    
  }