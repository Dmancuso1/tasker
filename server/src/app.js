require('dotenv').config()
const express = require('express');
const morgan = require('morgan'); // logging library
const compression = require('compression');
const helmet = require('helmet'); // secure HTTP headers
// const bodyParser = require('body-parser');

const api = require('./api');


// custom middleware for error logging
const middlewares = require('./middlewares')


const app = express()
app.use(express.json()) 
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());


app.get('/', (req, res) => {
  res.json({ "message" : "🌴🌴 LIVE INVENTORY APP 🌴🌴"})
})



// mount for routes in api dir
app.use('/api/v1', api);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);



module.exports = app