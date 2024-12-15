// Simulating the subscribe functionality
function subscribeUser(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;

    if (name && email && plan) {
        // Show the thank you message
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.innerHTML = `Thank you for subscribing, ${name}!\nPlan: ${plan}\nEmail: ${email}`;
        thankYouMessage.style.display = 'block';
        
        // Optionally, hide the subscription form after submission
        const form = document.getElementById('subscribe-form');
        form.style.display = 'none';

        // Reset the form after submission
        document.getElementById("subscribe-form").reset();
    } else {
        alert("Please fill in all fields!");
    }
}

// Simulating the signup functionality
function signupUser(event) {
    event.preventDefault(); // Prevent form submission to refresh the page

    // Collect form data
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simulate user sign-up by storing data in localStorage
    const existingUserEmail = localStorage.getItem('user_email');

    if (existingUserEmail === email) {
        // User is already signed up
        const existingUserMessage = document.getElementById('existing-user-message');
        existingUserMessage.innerHTML = `You are already signed up! Please <a href="login.html">login</a> to continue.`;
        existingUserMessage.style.display = 'block';
        
        setTimeout(() => {
            existingUserMessage.style.display = 'none';
        }, 2000); // Hide message after 2 seconds
        return; // Exit function if email exists
    }

    // Store the new user data in localStorage
    localStorage.setItem('user_name', name);
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_password', password); // Store password (in a real app, use secure hashing)

    // Show the thank you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.innerHTML = `Thank you for signing up, ${name}!`;
    thankYouMessage.style.display = 'block';

    // Optionally, hide the sign-up form after submission
    const form = document.getElementById('signup-form');
    form.style.display = 'none';

    // Reset the form after submission
    document.getElementById("signup-form").reset();
}
