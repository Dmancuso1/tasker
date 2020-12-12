const express = require('express');
const router = express.Router();

const queries = require('./countries.queries')

// TODO: actually call the queries
router.get('/', async (req, res) => {
  const countries = await queries.find()
  res.json(countries)
})


module.exports = router;