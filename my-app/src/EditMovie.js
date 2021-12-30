import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  { useState } from "react";
import { useParams } from 'react-router';
// import { useHistory } from 'react';

export function EditMovie({movies, setMovies}) {
  const {id}=useParams();
  // const history=useHistory();
  const movie=movies[id];
  console.log(id,movie);
  const [name, setName] = useState("movie.name");
  const [poster, setPoster] = useState("movie.poster");
  const [rating, setRating] = useState("movie.rating");
  const [summary, setSummary] = useState("movie.summary");
  const [trailer,setTrailer]=useState("movie.trailer");
  const setMovieName = (event) => setName(event.target.value);
  
  const editMovie = () => {
    console.log({ name, poster, rating, summary ,trailer});
    const updateMovie = { name, poster, rating, summary ,trailer};
    const copyMovies=[...movies];
    copyMovies[id]=updateMovie;
    setMovies(copyMovies);
    // history.push("/movies");
 };
  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={setMovieName} label="Name" variant="outlined" />
      <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Poster url" variant="outlined" />
      <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
      <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
      <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />
      <Button onClick={editMovie} color="success" variant="contained">Save</Button>
    </div>
  );
}
