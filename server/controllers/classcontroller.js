let Class = require("../models/class");
let Student = require("../models/student");
let Teacher = require("../models/teacher");
let Marks = require('../models/marks');
let async = require("async");
let Test = require('../models/test');


const {body,validationResult} = require("express-validator/check");
const {sanitizeBody}  = require("express-validator/filter");


exports.post_class =[

    body("Class", "class required").isLength({min:1}).trim(),
    sanitizeBody("Class").escape(),
    
    function(req,res,next){

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.status(400).json({message:"validation error"})
        }
        let class_ = new Class({
            class:req.body.Class
        });

    
        Class.findOne({class:req.body.Class},function(err,found){
            if(err){
                res.status(500).json({message:"server error"});
                next(err);
            }
            if(found){
              res.status(409).json({message:"class already exists"});

            }
            else{
                class_.save(function(err){
                    if(err){
                       res.status(500).json({message:"server error"});
                    }
                    else{
                        res.status(200).json({message:"OK"});
                    }
                })
            }
        })

}]


exports.list_class = function(req,res){

    Class.find(function(err,results){
        if(err){
            res.status(500).json({message:"server error"});
        }
        if(!results){
            res.status(204).json({message:'No content'});
        }
        if(results){
            res.json(results);
        }
    })
}

exports.class_information = function(req,res,next){

    async.parallel({

    student : function(callback){
        Student.find({class:req.params.id},callback).populate('class');
    },


    teacher : function(callback){
        Teacher.find({class:{ $in: [req.params.id]}},callback).populate('subject');
        
    },
    test: function(callback){
        Test.find({class:req.params.id},callback);
    }
},
    function(err,results){
        if(err){
            res.status(500).json({message:"server error"});
        }
        if(!results){
            res.status(204).json({message:'No content'});
        }
        else{
            res.json(results);
        }
    });
    
}

