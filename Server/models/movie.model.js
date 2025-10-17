import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    cast: {
      type: [String], // array of actor names
      default: [],
    },
    language: {
      type: [String], // e.g., ["English", "Hindi"]
      default: [],
    },
    trailerUrl: {
      type: String,
      trim: true,
    },
    thumbnailUrl: {
      type: String, // URL to the movie poster / thumbnail
      trim: true,
      default: "", // optional, can be empty
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    director: {
      type: String,
      trim: true,
    },
    releaseStatus: {
      type: String,
      enum: ["UPCOMING", "RELEASED", "BLOCKED"], // example statuses
      default: "UPCOMING",
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
  { versionKey: true }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
