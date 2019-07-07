let Teacher = require("../models/teacher");
let Class = require("../models/class");
let Subject = require("../models/subject");

let async = require("async");


const {body,validationResult} = require("express-validator/check");
const {sanitizeBody}  = require("express-validator/filter");

exports.post_teacher =[

    body("name","name required").isLength({min:1}).trim(),
    sanitizeBody("name").escape(),
    body("phone","phone number required").isLength({min:10}).isNumeric().trim(),
    sanitizeBody("phone").escape(),
    body("email","email required").isLength({min:3}).trim(),
    sanitizeBody("email").escape(),
    sanitizeBody('Class.*').escape(),

    (req,res,next) => {
        if(!(req.body.Class instanceof Array)){
            if(typeof req.body.Class==='undefined')
            req.body.Class=[];
            else
            req.body.Class=new Array(req.body.class);
        }
        next();
    },
    (req,res,next) =>
    {   
        const errors =validationResult(req);
        let teacher =new Teacher({
            name:req.body.name,
            class:req.body.Class,
            subject:req.body.subject,
            email:req.body.email,
            phone:req.body.phone
        })
        if(!errors.isEmpty()){
            res.status(400).json({message:"validation Error"});
        }
        else{
            Teacher.findOne({name:req.body.name,email:req.body.email})
            .exec(function(err,found){
                if(err){
                    res.status(500).json({message:"server error"});

                }
                if(found){
                     res.status(409).json({message:"teacher already exists"});
                }
                else{
                    teacher.save(function(err){
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

exports.techer_list =function(req,res,next){
    Teacher.find({}).populate("class").populate("subject").exec(function(err,results){
        if(err){
            res.status(500).json({message:"server error"});
        }
        else{
            res.status(200).json(results);
        }
    });
};

              
              

exports.teacher_update_post =[
    
    body("name","name required").isLength({min:1}).trim(),
    sanitizeBody("name").escape(),
    body("phone","phone number required").isLength({min:10}).isNumeric().trim(),
    sanitizeBody("phone").escape(),
    body("email","email required").isLength({min:3}).trim(),
    sanitizeBody("email").escape(),
    sanitizeBody('Class.*').escape(),

    (req,res,next) => {
        if(!(req.body.Class instanceof Array)){
            if(typeof req.body.Class==='undefined')
            req.body.Class=[];
            else
            req.body.Class=new Array(req.body.Class);
        }
        next();
    },
    (req,res,next) =>
    {   
        const errors =validationResult(req);

        if(!errors.isEmpty()){
            res.status(400).json({message:"validation error"});

        }
        else{
            Teacher.findById(req.params.id)
            .exec(function(err,found){
                if(err){
                    res.status(500).json({message:"server error"});
                }
               found.name=req.body.name;
               found.phone=req.body.phone;
               found.class=req.body.Class;
               found.subject=req.body.subject;
               found.email=req.body.email;

               found.save(function(err){
                if(err){
                    res.status(500).json({message:"server error"});
                }
                else{
                    res.status(200).json({message:"ok"});

                }
               });
               

        });
    }
}
]