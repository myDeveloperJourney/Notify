// import dependencies
// import models
const Note = require('../models/note');
// initialize router object
const router = require('express').Router();

/*
 Constructor - it's a function
 It's function that once invoked, returns an object
*/

// define routes

// INDUCES

// Index
router.get('/notes', (req, res) => {
    Note.find({}, (err, notes) => {
        res.send(notes);
    });
});

// New GET /notes/new

// Delete

// Update

// Create

// Edit

// Show GET /notes/:id

// export the router object
module.exports = router;