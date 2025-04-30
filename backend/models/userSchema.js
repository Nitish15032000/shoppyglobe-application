import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   name: { type: String, required: [true, 'Please enter your first name'], trim: true, maxlength: [30, 'First name cannot exceed 30 characters'] },
   email: { type: String, required: [true, 'Please enter your email'], unique: true, validate: [validator.isEmail, 'Please enter a valid email'], lowercase: true, trim: true },
   password: { type: String, required: [true, 'Please enter a password'], minlength: [8, 'Password must be at least 8 characters']},
   cartData: { type: Object, required: {} }
}, {minimize: false});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;