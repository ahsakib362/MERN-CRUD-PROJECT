const express = require('express');
const ProductsController = require('../controller/ProductsController');
const router = express.Router();

// API routing End Point.

// Create 
router.post("/CreateProduct",ProductsController.CreateProduct);
// Read
router.get("/ReadProduct",ProductsController.ReadProduct);
// Read Product By Id
router.get("/ReadProductByID/:id",ProductsController.ReadProductByID);
// Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct);
// Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);




module.exports=router;