const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({ "message" : "🌴🌴 LIVE INVENTORY APP 🌴🌴"})
})


module.exports = router;