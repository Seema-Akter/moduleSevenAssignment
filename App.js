// application configuration
const express= require('express');
const app= new express();
const router= require('./src/Routes/api');
require('dotenv').config({path: './config.env'});
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const cors= require('cors');
const hpp= require('hpp')
const helmet= require('helmet');
const mongooseSanitize= require('express-mongo-sanitize')
const validator = require('validator');
const rateLimit = require('express-rate-limit');
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    message: 'Too many requests from this IP, please try again later.',
  });

 // Usage rateLimit
 app.use(rateLimiter);
 // Usage bodyParser 
app.use(bodyParser.json());
// Usage cookieParser
app.use(cookieParser());
// Usage cors
app.use(cors());
// Usage hpp
app.use(hpp());
// Usage mongoose
app.use(mongooseSanitize());
// Usage helmet
app.use(helmet());

// Usage route
app.use('/api',router);

// undefine route
app.use((req,res)=>{
    res.status(404).send('404 not found');
})


module.exports=app;