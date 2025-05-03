import ProductModel from "../models/productModel.js";
import cloudinary from "../config/cloudnary.js";

// add product
export const addProduct = async (req, res) => {
   try {
      const { name, description, category, price, stock, rating } = req.body;

      // Ensure req.files exists and handle images
      const images = [];
      if (req.files?.image1) images.push(req.files.image1[0].path);
      if (req.files?.image2) images.push(req.files.image2[0].path);
      if (req.files?.image3) images.push(req.files.image3[0].path);
      if (req.files?.image4) images.push(req.files.image4[0].path);

      console.log(req.body);
      // console.log(images);
      
      const imageUrl = await Promise.all(
         images.map(async (image) => {
            const result = await cloudinary.uploader.upload(image.path, {
               resource_type: "image",
            });
            return result.secure_url;
         })
      );

      // console.log(imageUrl);

      // Create a new product
      const newProduct = new ProductModel({
         name,
         description,
         category,
         price : Number(price),
         stock : Number(stock),
         rating : Number(rating),
         image: images,
         date: new Date(),
      });

      // Save the product to the database
      const savedProduct = await newProduct.save();

      res.status(201).json({
         success: true,
         message: "Product added successfully",
         product: savedProduct,
      });
   } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({
         success: false,
         message: "Failed to add product",
         error: error.message,
      });
   }
};


// list product
export const listProduct = async (req, res) => {
   try {
      const products = await ProductModel.find({});
      res.status(200).json({
         success: true,
         message: "Product list",
         products,
      });
   } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({
         success: false,
         message: "Failed to fetch products",
         error: error.message,
      });
   }
}


// single product by id
export const singleProduct = async (req, res) => {
   try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) {
         return res.status(404).json({
            success: false,
            message: "Product not found",
         });
      }
      res.status(200).json({
         success: true,
         message: "Product details",
         product,
      });
   } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({
         success: false,
         message: "Failed to fetch product",
         error: error.message,
      });
   }

}


// remove product by id
export const removeProduct = async (req, res) => {
   res.json({ message: "Remove product" });
}
