// server.js (Node.js with Express)

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // Or any port you prefer

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to handle tracking data
app.post('/api/track', (req, res) => {
    const trackingData = req.body;
    
    // Log data to console (or save to a database)
    console.log('Received tracking data:', trackingData);
    
    // Example: Save to a file (not recommended for production)
    const logFilePath = path.join(__dirname, 'trackingData.log');
    fs.appendFile(logFilePath, JSON.stringify(trackingData) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
            return;
        }
        res.status(200).send('Data received');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
