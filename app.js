const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

/**
 * ENV
 */
require('dotenv').config()

/**
 * Middleware   
 */
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * View engine
 */
app.set('view engine', 'ejs')

/**
 * Router
 */
const blog = require('./routers/blogRouter');
app.use('/blog', blog);

/**
 * Listen App
 */
app.listen(process.env.PORT);