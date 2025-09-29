import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies[id];

  // Initialize state with actual movie data
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
    const updatedMovie = { name, poster, rating, summary, trailer };
    const copyMovies = [...movies];
    copyMovies[id] = updatedMovie;
    setMovies(copyMovies);
    navigate("/movies");
  };

  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" fullWidth margin="normal" />
      <TextField value={poster} onChange={(e) => setPoster(e.target.value)} label="Poster URL" variant="outlined" fullWidth margin="normal" />
      <TextField value={rating} onChange={(e) => setRating(e.target.value)} label="Rating" variant="outlined" fullWidth margin="normal" />
      <TextField value={summary} onChange={(e) => setSummary(e.target.value)} label="Summary" variant="outlined" fullWidth margin="normal" />
      <TextField value={trailer} onChange={(e) => setTrailer(e.target.value)} label="Trailer URL" variant="outlined" fullWidth margin="normal" />
      <Button onClick={editMovie} color="success" variant="contained" style={{ marginTop: '1rem' }}>Save</Button>
    </div>
  );
}
