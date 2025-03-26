const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// API endpoint to reverse string
app.post('/reverse', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'No name provided' });
    }

    const reversed = name.split('').reverse().join('');
    res.json({ reversed });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
