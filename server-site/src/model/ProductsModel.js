const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    ProductName:{type:String},
    ProductCode:{type:String},
    ProductImage:{type:String},
    UnitPrice:{type:String},
    Quantity:{type:String},
    TotalPrice:{type:String},
    CreatedDate:{type:Date,default:Date.now()},
    
},{versionKey:false});

const ProductsModel = mongoose.model('product',DataSchema);

module.exports = ProductsModel;