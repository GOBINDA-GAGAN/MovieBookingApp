import express from "express";
const router = express.Router();

router.get("/welcome-message", (req, res) => {
  res.status(200).json({ message: "Welcome to Thread API" });
});







export default router;
