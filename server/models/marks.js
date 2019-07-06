var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var marksSchema = new Schema({
    name:{type:Schema.Types.ObjectId,ref:"Student", required:true},
    test:{type:Schema.Types.ObjectId,ref:'Test',required:true},
    class: {type:Schema.Types.ObjectId,ref:"Class",required:true},
    telugu :{type:Number},
    hindi :{type:Number},
    english :{type:Number},
    maths:{type:Number},
    natural_science :{type:Number},
    physics :{type:Number},
    social :{type:Number}


});


module.exports = mongoose.model("Marks",marksSchema);