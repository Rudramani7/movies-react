import React from "react";
import { Movie } from './Movie';
// import {useHistory} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

export function MovieList({movies,setMovies}) {
  return (
  <section>
    <div className="movie-list">
      {movies.map((mv, index) => (
        <Movie
          key={index}
          name={mv.name}
          poster={mv.poster}
          rating={mv.rating}
          summary={mv.summary}
          id={index}
          
          DeleteMovieButton={<IconButton onClick={()=>{
            console.log(index,movies);
            const remainingMovies=movies.filter((mv,idx)=>idx !== index);
            console.log(remainingMovies);
            setMovies(remainingMovies);
          }}
          color="error" 
          aria-label="Delete movie">
            <DeleteIcon />
            </IconButton>}
            EditMovieButton={<IconButton 
            style={{marginLeft:"auto"}}
            className="movie-show-button" 
            // onClick={()=>history.push("/movies/edit/"+index)}
            color="secondary" 
            aria-label="Edit movie">
            <EditIcon />
            </IconButton>
                 }
          />
      ))}
    </div>
  </section>
);
}

// export function MovieList({movies,setMovies}) {
//     return (
//     <section>
//       <div className="movie-list">
//         {movies.map((mv, index) => (
//           <Movie
//             key={index}
//             name={mv.name}
//             poster={mv.poster}
//             rating={mv.rating}
//             summary={mv.summary}
//             id={index}
//             setMovies={setMovies}
//             movies={movies}
//             />
//         ))}
//       </div>
//     </section>
//   );
// }