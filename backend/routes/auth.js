import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();
router.post("/signin", async (req, res) => {
  try {
    const { admissionId, employeeId, password } = req.body;
    const user = await User.findOne({ $or: [{ admissionId }, { employeeId }] });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json({ error: "Wrong Password" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


/* User Registration */

router.post("/register", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({ ...req.body, password: hashedPass });
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;
