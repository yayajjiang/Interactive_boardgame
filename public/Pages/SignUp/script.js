/* Detect errors when user is typing info */

// Check for the USERNAME
var usernameInput = document.getElementById('username');
var errorMessage = document.getElementById('error-message');

usernameInput.addEventListener('input', function(event) {
  var usernameValue = event.target.value;

  // Check the username
  // at least 3 characters contains only numbers, letters and underscore
  var isValidUsername = /^[a-zA-Z][a-zA-Z]{2,9}$/.test(usernameValue);

  if (!isValidUsername) {
    errorMessage.textContent = 'Invalid username. Username must contain at least 3\
     characters START with letter and only contain letters, numbers, and underscores.';
    errorMessage.style.display = 'block';
    event.preventDefault(); // Prevent form submission to a server
  } else {
    // Make a GET request to the server with the username
    fetch(`/signup/checkUsername/${usernameValue}`)
      .then(response => {
        // Check if the fetch made a successful request
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then(data => {
        if (data.usernameExists) {
          // Show error that username exists
          errorMessage.textContent = 'Username is already taken. Please try another one.';
          errorMessage.style.display = 'block';
        }
        else {
          // Hide error message
          errorMessage.style.display = 'none';
        }

      })
      .catch((error) => {
        // This is where you run code if the server returns any errors
        console.error('There has been a problem with your fetch operation:', error);
      }); 
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
    event.preventDefault(); // Prevent form submission to a server
  } else {
    errorMessage.style.display = 'none';
  }
});

// Check for Confirm Password
var confirmPasswordInput = document.getElementById('confirm_password');
confirmPasswordInput.addEventListener('input', function(event) {
  var passwordValue = document.getElementById('password').value;
  var confirmPasswordValue = event.target.value;

  if (passwordValue != confirmPasswordValue) {
    errorMessage.textContent = 'Confirm Password is different';
    errorMessage.style.display = 'block';
    event.preventDefault(); // Prevent form submission to a server
  }
  else {
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
    event.preventDefault(); // Prevent form submission to a server
  }
  else {
    errorMessage.style.display = 'none';
  }
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    // event.preventDefault(); // Prevent form submission to a server
  
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
  