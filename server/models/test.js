var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var testSchema  = new Schema({
    test : {type : String,required:true},
    class:{type:Schema.Types.ObjectId,ref:"Class"}

});

module.exports = mongoose.model('Test',testSchema);