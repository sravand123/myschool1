let express = require('express');
let router = express.Router();
let classController = require("../controllers/classcontroller");
let adminController = require("../controllers/admincontroller");
let subjectController = require("../controllers/subjectcontroller");
let teacherController = require("../controllers/teachercontroller");
let studentController = require("../controllers/studentcontroller");
let marksController  = require("../controllers/markscontroller");
var testController = require('../controllers/testController');
let jwt = require("express-jwt");
let dotenv = require('dotenv');
dotenv.config();


let auth = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload'
});



router.get('',function(req,res){
    res.send('api works');
});

// adminroutes

router.post("/admin/signup",adminController.post_admin_signup);

router.post("/admin/login",adminController.post_admin_login);


//teacher routes

router.post("/teacher/create",auth,teacherController.post_teacher);

router.get("/teacher/list",auth,teacherController.techer_list);

router.post("/teacher/:id/update",auth,teacherController.teacher_update_post);


//studentroutes

router.post("/student/create",auth,studentController.post_student);

router.get("/student/list",auth,studentController.list_student);

router.post("/student/:id/update",auth,studentController.student_update_post);

router.get('/student/marks/:id',studentController.student_marks);



//class routes

router.post("/class/create",auth,classController.post_class);

router.get("/class/list",auth,classController.list_class);

router.get("/class/:id",auth,classController.class_information);


//subject routes


router.post("/subject/create",auth,subjectController.post_subject);

router.get("/subject/list",auth,subjectController.subject_list);

router.get("/subject/:id",auth,subjectController.subject_information);




//marks

router.get("/marks",auth,marksController.get_marks);

router.post("/marks/:id",auth,marksController.post_marks);

router.get('/marks/create/:id',auth,marksController.create_marks);

router.post('/marks/update/:id',auth,marksController.update_marks);

router.post('/test/create',auth,testController.create_test);

router.get('/test/:id',auth,marksController.get_marks);

                        

module.exports = router;