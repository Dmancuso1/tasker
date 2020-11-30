require('dotenv').config()
const port = process.env.PORT || 3001
const express = require('express')
const routes = require('./routes');
const app = express()
app.use(routes);

// use ./routes for routing


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})