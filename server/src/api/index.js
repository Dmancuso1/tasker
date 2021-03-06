const express = require('express');
const router = express.Router();
// import project for custom utility info ie: test messages.
const project = require('../constants/project')

// import routes from file
const countries = require('./countries/countries.routes')



// use routes from imported files
router.use('/countries', countries)



router.get('/', (req, res) => {
  res.json({message: project.message})
})









module.exports = router;