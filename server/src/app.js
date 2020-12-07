require('dotenv').config()
const express = require('express');
const morgan = require('morgan'); // logging library
const compression = require('compression');
const helmet = require('helmet'); // secure HTTP headers
const bodyParser = require('body-parser');
const app = express()
const routes = require('../routes');

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());

app.use(routes);

module.exports = app