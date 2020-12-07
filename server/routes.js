const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('🌴🌴 LIVE INVENTORY APP 🌴🌴')
})


module.exports = router;