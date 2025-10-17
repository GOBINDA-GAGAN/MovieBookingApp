import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouters from "./routes/user.routes.js";
import movieRoutes from "./routes/movie.route.js"
import cookieParser from "cookie-parser";
import HTTP_STATUS from "./utils/httpStatuscode.js";


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
app.use("/api/v1", userRouters);
app.use("/api/v1/movies", movieRoutes);



app.get("/welcome-message", (req, res) => {
res.status(HTTP_STATUS.OK).json({
  success: true,
  message: "🎬🍿 Welcome to Movie Booking API 🎟️✨",
  description: "🎥 Manage movies, 🎫 book tickets, and 🔐 handle user authentication with ease!",
  version: "1.0.0 🆕",
  environment: process.env.NODE_ENV || "development 🛠️",
  server_time: new Date().toISOString() + " ⏰",
  documentation_url: "📚 Coming Soon",
});

});

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
  const appName = "🎬 Movie Booking API 🎟️ ";
  console.log("=".repeat(80));
  console.log(`${appName} is now LIVE!`);
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log(`🟢 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🕒 Server started at: ${new Date().toLocaleString()}`);
  console.log("=".repeat(80));
});
