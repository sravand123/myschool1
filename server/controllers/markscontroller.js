let Marks = require('../models/marks');
let async = require('async');
let Student  = require('../models/student');
let Test = require('../models/test');

 const {body,validationResult}  = require("express-validator/check");
 const {sanitizeBody} = require("express-validator/filter");

 exports.post_marks = function(req,res,next){
     Marks.find({test:req.params.id},function(err,found){
          if(err){
              next(err);
          }
          if(found.length!==0){
            let mark = req.body;
            let i= 0;
            let cursor  =Marks.find({test:req.params.id}).cursor();
            cursor.on('data', function(marks){
                marks.telugu = mark[i].telugu;
                marks.hindi  = mark[i].hindi;
                marks.english  = mark[i].english;
                marks.maths  = mark[i].maths;
                marks.natural_science  = mark[i].natural_science;
                marks.physics  = mark[i].physics;
                marks.social  = mark[i].social;
                i++;
                marks.save(function(err){
                    if(err){
                        res.status(500).json({message:"server error"});
                    }
                });
            });
            cursor.on('close',function(){
                console.log("closed");
                res.status(200).json({message:"ok"});
            });
          }else{
            Marks.create(req.body,function(err,results){
                console.log(results);
                if(err){
                    res.status(500).json({message:"eror"});
                }
                else{
                    res.status(200).json({message:"ok"});
                }
            });
          }
     })
     
 };

 exports.get_marks = function(req,res,next){
     Marks.find({test:req.params.id}).populate("name").populate("class").exec(function(err,results){
          if(err){
              console.log("find error");
              next(err);
          }
          if(results.length!==0){
              console.log(results);
               res.status(200).json({marks:results,student:[]});
          }
          else{
            Test.findById(req.params.id).exec(function(err,results){
                if(err){
                    next(err);
                }
                else{
                    Student.find({class:results.class}).populate("class").exec(function(err,found){
                        if(err){
                            next(err);
                        }
                        else{
                            console.log(found);
                            res.json({student:found,marks:[]});
                        }
                    })
                }
            })
          }
     });
 };


 exports.create_marks = function(req,res,next){
     async.parallel(
         {
             students : function(callback){
                 Student.find({class:req.params.id}).populate("class").exec(callback);
             }
         },
         function(err,results){
             if(err){
                 next(err);
             }
             if(results){
                 res.status(200).json(results);
             }
         }
     )
 }


 exports.update_marks =function(req,res,next){
     let mark = req.body;
     let i= 0;
     let cursor  =Marks.find({}).cursor();
     cursor.on('data', function(marks){
         marks.telugu = mark[i].telugu;
         marks.hindi  = mark[i].hindi;
         marks.english  = mark[i].english;
         marks.maths  = mark[i].maths;
         marks.natural_science  = mark[i].natural_science;
         marks.physics  = mark[i].physics;
         marks.social  = mark[i].social;
         i++;
         marks.save(function(err){
             if(err){
                 res.status(500).json({message:"server error"});
             }
         });
     });
     cursor.on('close',function(){
         console.log("closed");
         res.status(200).json({message:"ok"});
     });

 };