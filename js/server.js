const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy users (you'd typically check a database)
const users = [
    { email: 'user@example.com', password: 'password123' }
];

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Make sure index.html is in the same folder
});

// Handle login POST request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password match a user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Invalid email or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
