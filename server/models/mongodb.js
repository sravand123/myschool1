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

/*mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

shutdown = function(msg,callback) {
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through '+ msg);
    });
};

process.once('SIGUSR2', function(){
    shutdown('nodemon restart', function(){
        process.kill(process.pid,'SIGUSR2');
    });

});

process.on('SIGINT', function(){
    shutdown('app termination',function(){
        process.exit(0);
    });
});
*/
require('./admin');
require('./class');
require('./marks');
require('./student');
require('./subject');
require('./teacher');


