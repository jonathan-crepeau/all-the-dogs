// SECTION - EXTERNAL MODULES
const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

// SECTION - INSTANCED MODULES
const app = express();

// SECTION - CONFIGURATION
const PORT = 3003;

// SECTION - MIDDLEWARE
app.use(bodyParser.json());
    // NOTE - This creates our request body.

// SECTION - VIEW ROUTES
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the All-The-Dogs API</h1>`);
});

// SECTION - API ROUTES

// 404 Route
app.get('/*', (req, res) => {
    res
        .status(404)
        .send(`<h1>NOT FOUND, BB!</h1>`);
});

// SECTION - START SERVER
app.listen(PORT, () => {
    console.log(`Professor Oak says 'Hello' on http://localhost:${PORT}.`);
});