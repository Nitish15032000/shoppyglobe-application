import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: { type: String, required: true },
   category: { type: String, required: true },
   brand: { type: String, required: true },
   image: { type: Array, required: true },
   price: { type: Number, required: true },
   stock: { type: Number, required: true, default: 50 },
   rating: { type: Number, min: 0, max: 5, default: 2.51 }

})

const ProductModel = mongoose.moddels.Product || mongoose.model("Product", productSchema);
export default ProductModel;