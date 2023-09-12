// application configuration
const express= require('express');
const app= new express();
const router= require('./src/Routes/api');
require('dotenv').config({path: './config.env'});
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const cors= require('cors');
const hpp= require('hpp')
const helmet= require('helmet')
const mongooseSanitize= require('express-mongo-sanitize')


app.use(bodyParser.json());
// application cookieParser
app.use(cookieParser());
// application cors
app.use(cors());
// application hpp
app.use(hpp());
// application mongoose
app.use(mongooseSanitize());
// application helmet
app.use(helmet());

// application route
app.use('/api',router);

// undefine route
app.use((req,res,next)=>{
    res.status(404).send('404 not found');
})


module.exports=app;