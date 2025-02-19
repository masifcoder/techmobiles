const express = require("express");
// const upload = require("../helpers/ImageUpload");
const { authMiddleware } = require("../middlewares/auth.middleware");

const productRouter = express.Router();
const  { createProduct, getAllProducts, updateProduct, deleteProduct } = require("../controllers/products.controller");


productRouter.post("/create", createProduct);
productRouter.get("/all", getAllProducts);
productRouter.put("/update/:id", authMiddleware, updateProduct);
productRouter.delete("/delete/:id", authMiddleware, deleteProduct);


module.exports = productRouter;