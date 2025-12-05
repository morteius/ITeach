// login.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Normally, send the data to the server (AJAX or Fetch API)
        alert('Login successful (in a real-world app, this would be validated by the server).');
    } else {
        alert('Please enter both email and password');
    }
});
