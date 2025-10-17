import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
const FrontedUrl = process.env.FrontedURl;

// Middleware
app.use(
  cors({
    origin: FrontedUrl,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", userRouter);

///show-cookies
app.get("/show-cookies", (req, res) => {
  try {
    return res.json({
      cookies: req.cookies,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "not found cookies", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️");
  console.log(`Server is listening on port http://localhost:${PORT} 🟢`);
  console.log("🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️");
});
