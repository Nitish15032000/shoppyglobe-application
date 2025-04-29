import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// importing the database connection file
import connectDB from './config/mongodb.js';

// app config 
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
connectDB();

// routes
app.get('/', (req, res) => {
   res.send('Hello World!');
});



app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
