import express from 'express';
import cors from 'cors';
import 'dotenv/config';


// importing the database connection file and cloudinary config file
import connectCloudinary from './config/cloudnary.js';
import connectDB from './config/mongodb.js';


// importing the product router and user router
import productRouter from './route/productRouter.js';
import userRouter from './route/userRoute.js';



// app config 
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
connectDB();
// Connect to Cloudinary
connectCloudinary(); 


// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);




app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
