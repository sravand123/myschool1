let Subject  = require("../models/subject");
let Teacher = require("../models/teacher");
let async = require("async");

const {body,validationResult} = require("express-validator/check");
const {sanitizeBody}  = require("express-validator/filter");

exports.post_subject = [

    body("subject","subject required").isLength({min:3}).isString().trim(),
    sanitizeBody("subject").escape(),
    function(req,res,next){
        const errors = validationResult(req);
        let subject  = new Subject({
            subject:req.body.subject
        })
        if(!errors.isEmpty()){
            res.status(400).json({message:"validation error"});
        }
        else{
            Subject.findOne({subject:req.body.subject},function(err,found){
                if(err){
                    res.status(500).json({message:"server error"});
                }
                if(found){
                    res.status(409).json({message:"subject already exists"});
                }
                else{
                    subject.save(function(err){
                        if(err){
                            res.status(500).json({message:"server error"});
                        }
                        else{
                            res.status(200).json({message:"ok"});
                        }
                    });
                }
            });
        }
    }
];


exports.subject_list =function(req,res,next){
    Subject.find(function(err,results){
        if(err){
            res.status(500).json({message:"server error"});
        }
        if(!results){
            res.status(204).json({message:"No subjects found"});
        }
        if(results){
            res.json(results);
        }
        
    });
}

exports.subject_information = function(req,res,next){
        async.parallel(
            {
            teacher : function(callback){
                Teacher.find({subject:req.params.id},callback);
            }

           },
    function(err,results){
        if(err){
            res.status(500).json({message:"server error"});
        }
        else{
            res.json(results);
        }

    });
}