document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to a server (for this example)
  
    // Retrieve form field values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var contact = document.getElementById('contact').value;
    var userType = document.getElementById('user-type').value;
  
    // Perform further actions with the form field values
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Contact:', contact);
    console.log('User Type:', userType);
  
    // Add your own logic here, such as validation, AJAX requests, etc.
  });