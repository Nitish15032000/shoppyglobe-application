import mongoose from "mongoose";

const productModel = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   description: {
      type: String,
      required: true,
      trim: true,
   },
   price: {
      type: Number,
      required: true,
      trim: true,
   },
   image: {
      type: String,
      required: true,
      trim: true,
   },
   category: {
      type: String,
      required: true,
      trim: true,
   },
   stock: {
      type: Number,
      required: true,
      trim: true,
   },
   rating: {
      type: Number,
      default: 0,
   },
   numReviews: {
      type: Number,
      default: 0,
   },
   isFeatured: {
      type: Boolean,
      default: false,
   },
   dateCreated: {
      type: Date,
      default: Date.now,
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   reviews: [
      {
         user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
         },
         name: {
            type: String,
            required: true,
         },
         rating: {
            type: Number,
            required: true,
         },
         comment: {
            type: String,
            required: true,
         },
      },
   ],
   isDeleted: {
      type: Boolean,
      default: false,
   },
   deletedAt: {
      type: Date,
   },
});

const Product = mongoose.model("Product", productModel);
export default Product;
