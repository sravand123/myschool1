var mongoose = require('mongoose');
let shutdown;
var dotenv = require('dotenv');
dotenv.config();

let dbURI = process.env.MONGO;

mongoose.connect(dbURI,{useNewUrlParser: true});

mongoose.connection.on('connected', function(){
    console.log('mongoose connected');
});

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error:' + err);
});


require('./admin');
require('./class');
require('./marks');
require('./student');
require('./subject');
require('./teacher');


