//======================================
// Get the required packages ===========
//======================================
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    productName     : {type:String},
    price           : {type:String},
    productImg      : { type : String },
})

var Product = mongoose.model('Product', productSchema)