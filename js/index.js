const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Welcome to the login page!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;


    if (username === 'user' && password === 'password') {
        res.json({ message: 'Login successful!' });
    } else {
        res.json({ message: 'Invalid credentials' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
