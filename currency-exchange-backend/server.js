const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ratesFilePath = path.join(__dirname, 'rates.json');

// Serve the admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Endpoint to get the current rates
app.get('/api/rates', (req, res) => {
    fs.readFile(ratesFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading rates file' });
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to update the rates
app.post('/api/rates', (req, res) => {
    const newRates = req.body;

    fs.writeFile(ratesFilePath, JSON.stringify(newRates, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error saving rates' });
        }
        res.json({ message: 'Rates updated successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
