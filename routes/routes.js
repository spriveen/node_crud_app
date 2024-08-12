// Example of correct route
const express = require('express');
const router = express.Router();

// Your route definitions
router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

// Make sure there are no extra or missing braces
module.exports = router;

