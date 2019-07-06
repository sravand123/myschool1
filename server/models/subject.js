var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    subject: {type:String,required:true}
});

module.exports = mongoose.model("Subject",subjectSchema);


