function loginUser(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve user data from localStorage
    const storedEmail = localStorage.getItem('user_email');
    const storedPassword = localStorage.getItem('user_password');
  
    // Check if the provided credentials match the stored ones
    if (email === storedEmail && password === storedPassword) {
      // Successful login
      localStorage.setItem('user_logged_in', true); // Set a flag to indicate the user is logged in
      window.location.href = 'index.html'; // Redirect to the homepage after login
    } else {
      // Show error message
      const errorMessage = document.getElementById('error-message');
      errorMessage.style.display = 'block';
    }
  }
  