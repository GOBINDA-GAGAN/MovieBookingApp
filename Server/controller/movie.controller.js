import HttpStatus from "../utils/httpStatuscode.js";
import movieSchema from "../models/movie.model.js";

// Add/create new movie ✅
export const addMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      cast,
      language,
      trailerUrl,
      thumbnailUrl,
      releaseDate,
      director,
      releaseStatus,
      likes,
      dislikes,
    } = req.body;

    const movie = await movieSchema.create({
      title,
      description,
      cast,
      language,
      trailerUrl,
      thumbnailUrl,
      releaseDate,
      director,
      releaseStatus,
      likes,
      dislikes,
    });

    return res.status(HttpStatus.CREATED).json({
      status: true,
      message: "Movie created successfully",
      data: movie,
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get all movies ✅
export const getAllMovies = async (req, res) => {
  try {
    const movies = await movieSchema.find();

    if (!movies || movies.length === 0) {
      return res.status(HttpStatus.NOT_FOUND).json({
        status: false,
        message: "Movie Not Found",
        data: {
          totalMovies: movies.length,
          movies,
        },
      });
    }

    return res.status(HttpStatus.OK).json({
      status: true,
      message: "Movie created successfully",
      data: {
        totalMovies: movies.length,
        movies,
      },
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get movie by ID ✅
export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params; 

    const movie = await movieSchema.findById(id);

    if (!movie) {
      return res.status(HttpStatus.NOT_FOUND).json({
        status: false,
        message: "Movie Not Found",
        data: {},
      });
    }

    return res.status(HttpStatus.OK).json({
      status: true,
      message: "Movie fetched successfully",
      data: movie.toObject(), // ✅ convert Mongoose document to plain JSON
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Update movie by ID
export const updateMovieById = async (req, res) => {
  try {
    const { id } = req.params; // movie ID from route
    const updateData = req.body; // new data to update

    // Find and update movie
    const updatedMovie = await movieSchema.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // return the updated document
    );

    if (!updatedMovie) {
      return res.status(HttpStatus.NOT_FOUND).json({
        status: false,
        message: "Movie Not Found",
        data: {},
      });
    }

    return res.status(HttpStatus.OK).json({
      status: true,
      message: "Movie updated successfully",
      data: updatedMovie.toObject(),
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


// Delete movie by ID ✅
export const deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await movieSchema.deleteOne({ _id:id });

    if (response.deletedCount === 0) {
      return res.status(HttpStatus.NOT_FOUND).json({
        status: false,
        message: "Movie Not Found",
        data: response,
      });
    }

    return res.status(HttpStatus.OK).json({
      status: true,
      message: "Movie delete successfully",
      data: response,
    });
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Search movie by name
export const searchMovie = async (req, res) => {
  try {
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default {
  getAllMovies,
  getMovieById,
  addMovie,
 updateMovieById,
  deleteMovieById,
  searchMovie,
};
