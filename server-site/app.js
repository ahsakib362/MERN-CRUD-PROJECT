const express = require('express');
const router = require('./src/routes/api');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Security Middleware

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database
const mongoose = require('mongoose');

// Security Middleware Implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser
app.use(bodyParser.json());

// Rate Limiter

const limiter = rateLimit({windowMs:15*60*100,max:3000});
app.use(limiter);

// Mongo DB Database Connection

 let URI = "mongodb+srv://<username>:<password>@cluster0.qxzxta4.mongodb.net/CRUD?retryWrites=true&w=majority";
 let OPTION = {user:'abdullahhamid362',pass:'hamidsakib143',autoIndex:true}
 mongoose.connect(URI,OPTION,(error)=>{
    console.log('Connection Successful');
    console.log(error);
})

// Managing React Front End Routing.

// app.use(express.static('client/build'));
// app.get("/*",function(req,res){
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
// });


// Routing Implement
app.use("/api/v1",router);



module.exports = app;










