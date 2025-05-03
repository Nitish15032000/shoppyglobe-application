import multer from 'multer';

// Set up multer for file uploads
// Multer is a middleware for handling multipart/form-data, which is used for uploading files
const storage = multer.diskStorage(
   {
      filename: (req, file, callback) => {
         callback(null, file.originalname);
      }
   }
);

const upload = multer({ storage: storage });

export default upload;