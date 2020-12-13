const express = require('express');
const router = express.Router();

const queries = require('./countries.queries')


// TODO: actually call the queries


router.get('/', async (req, res) => {
  const countries = await queries.find()
  res.json(countries)
});


router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const country = await queries.get(parseInt(id, 10) || 0)
    if (country) {
      return res.json(country)
    };
    return next(); // throws an error 404
  } catch (error) {
    return next(error); // next() lets us pass down the error .
  }
});




module.exports = router;