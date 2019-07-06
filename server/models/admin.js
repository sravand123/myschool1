let mongoose = require("mongoose");
let bcrypt= require("bcrypt");
let jwt =  require('jsonwebtoken');
let Schema = mongoose.Schema;
var dotenv = require('dotenv');
dotenv.config();

let adminSchema = new Schema ({
    username:{type:String,required:true},
     password:{type:String,required:true}
});

adminSchema.methods.validPassword = function(password){
     bcrypt.compare(password,this.password, function(err,valid){
         if(err){
             next(err);
         }
         if(!valid){
            return false;
        }
         if(valid){
             return true;
         }
        
     });
} ;

adminSchema.methods.generatejwt = function(){
    let expiry = new Date();
    expiry.setDate(expiry.getDate()+7);
    return(
        jwt.sign({
        _id: this._id,
        username : this.username,
        exp: parseInt(expiry.getTime()/1000)},process.env.SECRET));

};

module.exports = mongoose.model("Admin",adminSchema);