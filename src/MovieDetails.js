import React from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(id, movies, movie);
  return <div>
    <iframe width="800" height="409"
      // src="https://www.youtube.com/embed/5PSNL1qE6VY"
      src={movie.trailer}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating">⭐{movie.rating}</p>
      </div>
      <p>{movie.summary}</p>
      <Button variant="contained" startIcon={<ArrowBackIosIcon />}>Back</Button>
    </div>
  </div>;
}
