// Example of correct route
const express = require('express');
const router = express.Router();

// Your route definitions
router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/add',(req,res) =>{
res.render('add_users', {title: "Add Users"});

});

// Make sure there are no extra or missing braces
module.exports = router;

