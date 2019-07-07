let Marks = require('../models/marks');
let async = require('async');
let Student  = require('../models/student');
var Class = require('../models/class');
let Test = require('../models/test');

const {body,validationResult}  = require("express-validator/check");
const {sanitizeBody} = require("express-validator/filter");

exports.create_test = [
    body('name','test name required').isLength({min:1}).trim(),
    sanitizeBody('name').escape(),
    (req,res,next) => {
        let test = new Test({
            test:req.body.name,
            class:req.body.Class
        });
        const errors  = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({message:'validation error'});
        }
        else{
            Test.find({test:req.body.name},function(err,found){
                if(err){
                    next(err);
                }
                if(found===[]){
                    res.status(409).json({message:'Test name already exists'});
                }
                else{
                    test.save(function(err,results){
                        if(err){
                            next(err);
                        }
                        else{
                            res.status(200).json(results);
                        }
                    });
                }
            });
        }
    }
    
]
/*
exports.get_students_test = function(req,res,next){
    Test.findById(req.params.id).exec(function(err,results){
        if(err){
            next(err);
        }
        else{
            Student.find({class:results.class},function(err,found){
                if(err){
                    next(err);
                }
                else{
                    res.json(found);
                }
            })
        }
    })
}


*/