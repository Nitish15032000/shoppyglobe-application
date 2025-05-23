import express from "express";
import { addProduct, listProduct , singleProduct, removeProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// list product 
productRouter.get("/list", listProduct);
// add product
productRouter.post("/add", adminAuth , upload.fields([{ name:'image1', maxCout:1}, { name:'image2', maxCout:1}, { name:'image3', maxCout:1}, { name:'image4', maxCout:1}]), addProduct);
// single product
productRouter.get("/single/:id", singleProduct);
// remove product
productRouter.delete("/remove/:id", adminAuth, removeProduct);

export default productRouter;