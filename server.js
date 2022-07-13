// require dependencies
const express = require('express');

// initialize the express app
const app = express();

// configure application settings

// mount middleware

// mount routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// tell the app to listen for requests from the client

// ? why do we do this ?
const port = 3000;

app.listen(port, () => {
    console.log(`Express is listening for request on port:${port}`);
});