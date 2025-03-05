const express = require("express");
// const upload = require("../helpers/ImageUpload");
const { authMiddleware } = require("../middlewares/auth.middleware");

const productRouter = express.Router();
const  { createProduct, getAllProducts, updateProduct, deleteProduct, filterProducts } = require("../controllers/products.controller");


productRouter.post("/create", createProduct);
productRouter.get("/all", getAllProducts);
productRouter.put("/update/:id", authMiddleware, updateProduct);
productRouter.delete("/delete/:id", authMiddleware, deleteProduct);
productRouter.get("/filters", filterProducts);



module.exports = productRouter;