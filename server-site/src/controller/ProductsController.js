const ProductsModel = require('../model/ProductsModel');

// Create Method.

exports.CreateProduct = (req,res)=>{
    let reqBody = req.body;
    ProductsModel.create(reqBody,(err,data)=>{
        if (err) {
            res.status(400).json({status:"failed",data:err})
        } else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// Read Method.

exports.ReadProduct = (req,res)=>{

    ProductsModel.find((err,data)=>{
        if (err) {
            res.status(400).json({status:"failed",data:err})
        } else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// Read By Id

exports.ReadProductByID = (req,res)=>{

    let id = req.params.id;
    let Query = {_id:id}; 
    ProductsModel.find(Query,(err,data)=>{
        if (err) {
            res.status(400).json({status:"failed",data:err})
        } else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// Update Method.

exports.UpdateProduct = (req,res)=>{

    let id = req.params.id;
    let Query = {_id:id}; 
    let reqBody = req.body;
    ProductsModel.updateOne(Query,reqBody,(err,data)=>{
        if (err) {
            res.status(400).json({status:"failed",data:err})
        } else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// Delete Method

exports.DeleteProduct = (req,res)=>{

    let id = req.params.id;
    let Query = {_id:id}; 

    ProductsModel.remove(Query,(err,data)=>{
        if (err) {
            res.status(400).json({status:"failed",data:err})
        } else {
            res.status(200).json({status:"success",data:data})
        }
    })
}