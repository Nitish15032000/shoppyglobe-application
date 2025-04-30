import { v2 as cloudinary } from 'cloudinary';


const connectCloudinary = async () => {

   // Configuration
   cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Click 'View API Keys' above to copy your Cloud name
      api_key: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
      api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
   });
   console.log("Cloudinary is connected")
}
export default connectCloudinary;