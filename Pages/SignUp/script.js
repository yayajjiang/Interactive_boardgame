/* Detect errors when user is typing info */

// Check for the USERNAME
var usernameInput = document.getElementById('username');
var errorMessage = document.getElementById('error-message');

usernameInput.addEventListener('input', function(event) {
  var usernameValue = event.target.value;

  // Check the username
  // at least 3 characters contains only numbers, letters and underscore
  var isValidUsername = /^[a-zA-Z0-9_]{3,10}$/.test(usernameValue);

  // Check if the UserName is already exist (need to check in the database)
  // TODO: After Set up a database

  if (!isValidUsername) {
    errorMessage.textContent = 'Invalid username. Username must contain at least 3\
     characters and only contain letters, numbers, and underscores.';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }

});

// Check for the Password
var passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function(event) {
  var passwordValue = event.target.value;

  // Check if it is the valid password with required 
  // combinations and has enough digits
  var passwordRegex = new RegExp (
    /^(?=.*[a-z])/.source // assert at least one lower case letter contained
    + /(?=.*[A-Z])/.source // assert at least one upper case letter contained
    + /(?=.*\d)/.source // assert at least one digit contained
    + /(?=.*[@$!%*?&])/.source  // assert at least one special symbol contained 
    + /[A-Za-z\d@$!%*?&]{8,20}$/.source // assert whether the combination matched with at 
                                        // at least 8 char and no more than 20 char. 
  );
  var isValidPassword = passwordRegex.test(passwordValue);

  if (!isValidPassword) {
    errorMessage.textContent = 'Invalid Password. Password must contain at least 8\
     characters and only contain letters, numbers, and special symbol(no space).';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});

// Check for Phone number
var phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(event) {
  var phoneValue = event.target.value;

  // Check if the phone number is a valid number and has enough digits
  var isValidPhoneNumber =  /^\d{10}$/.test(phoneValue); // 10 digits

  // If the phone number is not valid, display the error message
  var errorMessage = document.getElementById('error-message');

  if (!isValidPhoneNumber) {
    errorMessage.textContent = 'Invalid phone number. Please enter a valid phone number.';
    errorMessage.style.display = 'block';
  }
  else {
    errorMessage.style.display = 'none';
  }
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to a server
  
    // Retrieve form field values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var userType = document.getElementById('user-type').value;

    // Perform further actions with the form field values
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Phone:', phone);
    console.log('User Type:', userType);
  });
  