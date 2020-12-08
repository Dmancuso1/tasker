const express = require('express');
const router = express.Router();


// import routes from file
const countries = require('./countries/countries.routes')



// use routes from imported files
router.use('/countries', countries)












module.exports = router;