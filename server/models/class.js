let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let classSchema = new Schema({
    class:{type:Number,required:true}
});

module.exports = mongoose.model("Class",classSchema);