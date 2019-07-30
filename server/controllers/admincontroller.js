let Admin = require("../models/admin");
let bcrypt = require("bcrypt");
var passport = require('passport');

const {body,validationResult} =require("express-validator/check");
const {sanitizeBody}  = require("express-validator/filter");

exports.post_admin_signup =[ 
    body("username","username required").isLength({min:4}).isString().trim(),
    sanitizeBody("username").escape(),
    body("password","password required").isLength({min:6}).isString().trim(),
    sanitizeBody("password").escape(),
    
    function(req,res,next){
                 const errors = validationResult(req);
                 if(!errors.isEmpty()){
                    res.status(400).json({message:"validation error"});
                 }
                 else{

                 
                 Admin.findOne({username:req.body.username},function(err,found){
                     if(err){
                         res.status(500).json({message:"Internal server error"});
                     }
                     if(found){
                        res.status(409).json({message:"user already exists"});
                    }
                     else{
                       let admin =new Admin({
                            username:req.body.username,
                            password:bcrypt.hashSync(req.body.password,10)
                        });
                        console.log(admin);
                          admin.save(function(err){
                              if(err){
                                  res.status(500).json({message:'server error'});
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
        passport.authenticate('local', function(err, user, info) {
            let token ;
            if (err) { return next(err); }
            if (!user) { 
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


