import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => /^[0-9]{10}$/.test(value),
      message: 'Invalid phone number format',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  userImage: {
    type: String, // You can use a URL or store images in a file system or cloud storage
  },
  role: {
    type: String,
    enum: ['doctor', 'patient'],
    required: true,
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    },
  ],
}, {
  timestamps: true,
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Ensure that the email is unique in the system
userSchema.path('phoneNumber').validate(async function (value) {
  const count = await this.model('User').countDocuments({ phoneNumber: value });
  return !count;
}, 'Phone number already exists');

// Validate email format
userSchema.path('username').validate(function (value) {
  return isEmail(value); // Use the validator library to check for email format
}, 'Invalid email format');

const User = mongoose.model("User", userSchema);

export default User;
