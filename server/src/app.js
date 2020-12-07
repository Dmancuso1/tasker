require('dotenv').config()
const express = require('express');
const morgan = require('morgan'); // logging library
const compression = require('compression');
const helmet = require('helmet'); // secure HTTP headers
const routes = require('../routes');
// const bodyParser = require('body-parser');

const middlewares = require('./middlewares')

const app = express()
app.use(express.json()) 
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());

app.use(routes);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);



module.exports = app