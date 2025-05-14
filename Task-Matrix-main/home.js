// JavaScript for handling logout
document.getElementById("logoutButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Clear user session or tokens
    sessionStorage.clear(); // or localStorage.clear();
    
    // Optionally, make an API call to log out the user on the server
    // fetch('/api/logout', { method: 'POST' })
    //     .then(response => {
    //         if (response.ok) {
    //             // Logout successful, redirect to login page
    //             window.location.href = 'login.html'; // Change to your login page
    //         } else {
    //             console.error('Logout failed');
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    
    // Redirect to login page
    window.location.href = 'login.html'; // Change to your login page
});