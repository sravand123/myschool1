let Student =require("../models/student");
let Class   = require("../models/class");
let async =require("async");
let Marks =require('../models/marks');


const {body,validationResult} = require("express-validator/check");
const {sanitizeBody} = require("express-validator/filter");


exports.post_student = [
    body("name","name required").isLength({min:1}).isString().trim(),
    sanitizeBody("name").escape(),
    body("roll","roll required").isLength({min:1}).isNumeric().trim(),
    sanitizeBody("roll").escape(),
    body("dob","Date of birth required").isLength({min:1}).trim(),
    sanitizeBody("dob").escape(),
    body("father_name","Father name required").isLength({min:1}).isString().trim(),
    sanitizeBody("father_name").escape(),
    body("mother_name","Mother name required").isLength({min:1}).isString().trim(),
    sanitizeBody("mother_name").escape(),
    body("aadhar","Aadhar number required").isLength({min:12}).isNumeric().trim(),
    sanitizeBody("aadhar").escape(),

    (req,res,next)=>{
        let errors = validationResult(req);
        let student= new Student ({
            name:req.body.name,
            class:req.body.Class,
            roll:req.body.roll,
            dob:req.body.dob,
            father_name:req.body.father_name,
            mother_name:req.body.mother_name,
            aadhar:req.body.aadhar

        });

        if(!errors.isEmpty()){
           res.status(400).send("validation error");
        }
        else{

        Student.findOne({name:req.body.name,dob:req.body.dob})
        .exec(function(err,found){
            if(err){
                res.status(500).json({message:"server error"});

            }
            if(found){
                res.status(409).send("Student already found");
            }
            else{
                student.save(function(err){
                    if(err){
                        console.log("save failed");
                        res.status(500).send("Server error");
                    }
                    else{
                       res.status(200).send({message:"student saved"});
                    }
                })
            }
        })
    }
    }

]

exports.list_student = function(req,res,next){

    Student.find({}).populate("class").exec(function(err,results){
        if(err){
            res.status(500).json({message:"server erro"});        
        }
       if(!results){
        res.status(204).json({message:"No content"});
        }

       if(results){
           console.log(results);
           res.status(200).json(results);
       }
    });

};

exports.student_update_post = [
    body("name","name required").isLength({min:1}).isString().trim(),
    sanitizeBody("name").escape(),
    body("roll","roll required").isLength({min:1}).isNumeric().trim(),
    sanitizeBody("roll").escape(),
    body("dob","Date of birth required").isLength({min:1}).trim(),
    sanitizeBody("dob").escape(),
    body("father_name","Father name required").isLength({min:1}).isString().trim(),
    sanitizeBody("father_name").escape(),
    body("mother_name","Mother name required").isLength({min:1}).isString().trim(),
    sanitizeBody("mother_name").escape(),
    body("aadhar","Aadhar number required").isLength({min:12}).isNumeric().trim(),
    sanitizeBody("aadhar").escape(),

    (req,res,next)=>{
        let errors = validationResult(req);
        let student= new Student ({
            name:req.body.name,
            class:req.body.Class,
            roll:req.body.roll,
            dob:req.body.dob,
            father_name:req.body.father_name,
            mother_name:req.body.mother_name,
            aadhar:req.body.aadhar

        }

        )
        console.log(student);
        if(!errors.isEmpty()){
            res.status(400).json({message:"validation error"});

        }
        else{
        Student.findById(req.params.id)
        .exec(function(err,found){
            if(err){
                res.status(500).json({message:"server error"});

            }

           found.name=req.body.name;
           found.class=req.body.Class;
           found.roll=req.body.roll;
           found.dob=req.body.dob;
           found.father_name=req.body.father_name;
           found.mother_name=req.body.mother_name;
           found.aadhar=req.body.aadhar;
           
           found.save(function(err){
               if(err){
                res.status(500).json({message:"server error"});
               }
           });
           res.status(200).json({message:"ok"});
        })
    }
    }

];


exports.student_marks = function(req,res,next){
    Marks.find({name:req.params.id}).populate("test").exec(function(err,results){
        if(err){
            next(err);
        }
        else{
            res.json(results);
        }

    })
   
}





