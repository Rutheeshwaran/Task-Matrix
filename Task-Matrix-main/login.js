// Add event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get input values
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Save the values to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('password', password); // Note: Storing passwords in localStorage is not secure!

    // Display the values in the console
    console.log('Name:', name);
    console.log('Password:', password);

    // Redirect to the resume file
    window.location.href = "Resume_file.html"; // Ensure this matches your file name

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
});