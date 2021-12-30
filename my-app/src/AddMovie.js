import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  { useState } from "react";

export function AddMovie({movies, setMovies}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const setMovieName = (event) => setName(event.target.value);
  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };
  const addMovie = () => {
    console.log({ name, poster, rating, summary,trailer });
    const newMovie = { name, poster, rating, summary,trailer };
    setMovies([...movies, newMovie]);
    resetMovieForm();
 };
  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={setMovieName} label="Name" variant="outlined" />
      <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Poster url" variant="outlined" />
      <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
      <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
      <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />
      <Button onClick={addMovie} color="primary" variant="contained">Add movie</Button>
    </div>
  );
}
