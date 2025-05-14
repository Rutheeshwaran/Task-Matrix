// Function to clear session storage
function clearSessionStorage() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('dob');
}

// Function to handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    // Store data in session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('dob', dob);

    // Redirect to the next page
    window.location.href = 'login.html'; // Change to your next page
});

// Load the placeholders and clear stored values on page load
window.onload = function() {
    clearSessionStorage(); // Clear stored values to show placeholders
};