import express from "express";
import {
  addMovie,
  deleteMovieById,
  getAllMovies,
  getMovieById,
  searchMovie,
  updateMovieById,
} from "../controller/movie.controller.js";

const router = express.Router();

// 🎬 Routes
router.get("/", getAllMovies); // Get all movies✅
router.get("/:id", getMovieById); // Get movie by ID✅
router.post("/", addMovie); // Add new movie✅
router.put("/:id", updateMovieById); // Update movie✅
router.delete("/:id", deleteMovieById); // Delete movie✅
router.get("/search/:name", searchMovie); // Search movie by name

export default router;
