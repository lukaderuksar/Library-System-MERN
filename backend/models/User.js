// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ["student", "employee"], // Only allow "student" or "employee"
    required: true
  },
  userFullName: String,
  admissionId: {
    type: String,
    unique: true, // Ensure admissionId is unique
    sparse: true // Allow null or missing admissionId
  },
  employeeId: {
    type: String,
    unique: true, // Ensure employeeId is unique
    sparse: true // Allow null or missing employeeId
  },
  age: Number,
  dob: Date,
  gender: String,
  address: String,
  mobileNumber: String,
  email: {
    type: String,
    unique: true, // Ensure email is unique
    required: true
  },
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

export default User;
