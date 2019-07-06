let Admin = require("../models/admin");
let bcrypt = require("bcrypt");
var passport = require('passport');

const {body,validationResult} =require("express-validator/check");
const {sanitizeBody}  = require("express-validator/filter");

exports.post_admin_signup =[ 
    body("username","username required").isLength({min:8}).isString().trim(),
    sanitizeBody("username").escape(),
    body("password","password required").isLength({min:8}).isString().trim(),
    sanitizeBody("password").escape(),
    
    function(req,res,next){
                 const errors = validationResult(req);
                 let admin;
                 bcrypt.hash(req.body.password,10,function(err,hash){
                     if(err){
                    console.log("hash error");
                    next(err);
                    }
                    else{
                     admin =new Admin({
                        username:req.body.username,
                        password:hash
                    });
                }
                 });
                
                 if(!errors.isEmpty()){
                    console.log('validation error');
                    res.status(400).json({message:"validation error"});
                 }
                 else{

                 
                 Admin.findOne({username:req.body.username},function(err,found){
                     if(err){
                         console.log('find error');
                         res.status(500).json({message:"Internal server error"});
                     }
                     if(found){
                        res.status(409).json({message:"user already exists"});
                    }
                     else{
                          admin.save(function(err){
                              if(err){
                                  console.log('save error');
                                  next(err);
                                }
                              else{
                                  let token;
                                  token = admin.generatejwt();
                                  res.status(200).json({token:token});

                              }
                          });
                     }
                 });
                }

}];

exports.post_admin_login = [

    body("username","username required").isLength({min:8}).isString().trim(),
    sanitizeBody("username").escape(),
    body("password","password required").isLength({min:8}).isString().trim(),
    sanitizeBody("password").escape(),

    function(req,res,next){
        console.log("entered");
        passport.authenticate('local', function(err, user, info) {
            let token ;
            if (err) { return next(err); }
            if (!user) { 
                console.log(user);
                res.status(401).json({message:"Invalid login"});

             }
             if(user){
                 token =user.generatejwt();
                 res.status(200).json({"token":token});
             }
          
          })
          (req, res);
    }
]


