import React from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export function MovieList({ movies, setMovies }) {
  const navigate = useNavigate();

  // Delete movie handler
  const handleDelete = (id) => {
    const remainingMovies = movies.filter((_, idx) => idx !== id);
    setMovies(remainingMovies);
  };

  // Edit movie handler
  const handleEdit = (id) => {
    navigate(`/movies/edit/${id}`);
  };

  return (
    <section>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index} // ideally use mv.id if you have unique IDs
            id={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            DeleteMovieButton={
              <IconButton
                onClick={() => handleDelete(index)}
                color="error"
                aria-label="Delete movie"
              >
                <DeleteIcon />
              </IconButton>
            }
            EditMovieButton={
              <IconButton
                onClick={() => handleEdit(index)}
                style={{ marginLeft: "auto" }}
                color="secondary"
                aria-label="Edit movie"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </section>
  );
}
