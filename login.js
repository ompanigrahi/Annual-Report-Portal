// Placeholder for other interactive features


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulating a correct user ID and password
    const correctUserID = 'admin';
    const correctPassword = '12345';

    if (userID === correctUserID && password === correctPassword) {
        // Redirect to index.html
        location.href = 'login.html';
    }
    else {
        // Display error message
        errorMessage.textContent = 'Invalid User ID or Password';
        errorMessage.style.display = 'block';
    }

});
