// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userType: String,
  userFullName: String,
  admissionId: String,
  employeeId: String,
  age: Number,
  dob: Date,
  gender: String,
  address: String,
  mobileNumber: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

export default User;
