var mongoose = require("mongoose");

var Schema  = mongoose.Schema;

var teacherSchema = new Schema({
    name:{type:String,required:true,lowercase:true},
    class:[{type:Schema.Types.ObjectId,ref:"Class",required:true}],
    subject:{type:Schema.Types.ObjectId,ref:"Subject",required:true},
    email:{type:String,required:true,min:3},
    phone:{type:Number,required:true,min:10},
});

module.exports = mongoose.model("Teacher",teacherSchema);