// require dependencies
require('dotenv').config();
const express = require('express');
const notesRouter = require('./controllers/notes');
const mongoose = require('mongoose');
const morgan = require('morgan');

// initialize the express app
const app = express();

// configure application settings
const MongoURL = process.env.MONGO_URL

mongoose.connect(MongoURL);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});


// mount middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
// GET /notes

// mount routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/', notesRouter);


// tell the app to listen for requests from the client

// ? why do we do this ?
const port = 3000;

app.listen(port, () => {
    console.log(`Express is listening for request on port:${port}`);
});