import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
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
        validator: (value: string) => /^\+91[789]\d{9}$/.test(value),
        message: "Invalid phone number format",
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
      enum: ["doctor", "patient"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
