var mongoose = require("mongoose");

var Schema   = mongoose.Schema;

var studentSchema = new Schema({

    name:{type:String,required:true,lowercase:true},
    class:{type:Schema.Types.ObjectId,ref:"Class",required:true},
    roll:{type:Number,required:true},
    dob:{type:Date,required:true},
    father_name:{type:String,required:true,lowercase:true},
    mother_name:{type:String,required:true,lowercase:true},
    aadhar:{type:Number,required:true}
    

});
                               


module.exports = mongoose.model("Student",studentSchema);