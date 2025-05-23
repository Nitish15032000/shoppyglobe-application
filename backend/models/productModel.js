import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: { type: String, required: true },
   category: { type: String, required: true },
   price: { type: Number, required: true },
   stock: { type: Number, required: true, default: 50 },
   rating: { type: Number, min: 0, max: 5, default: 2.51 },
   image: { type: Array, required: true }

})

const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);
export default ProductModel;