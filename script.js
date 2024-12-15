// Show the modal when the "Sign Up" button is clicked
document.getElementById('signupBtn').onclick = function() {
    document.getElementById('signupModal').style.display = "block";
  }
  
  // Close the modal when the "X" button is clicked
  function closeModal() {
    document.getElementById('signupModal').style.display = "none";
  }
  
  // Close the modal if the user clicks anywhere outside of the modal
  window.onclick = function(event) {
    if (event.target == document.getElementById('signupModal')) {
      closeModal();
    }
  }
  