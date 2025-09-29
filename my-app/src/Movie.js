import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from "react";
import { Counter } from './Counter';
// import {useHistory} from "react";

export function Movie({ name, poster, rating, summary, id,DeleteMovieButton,EditMovieButton}) {
  const [show, setShow] = useState(true);
  // const history =useHistory();
  return (
    <Card className="movie-container">

      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{name}

          <IconButton 
              // onClick={() => history.push("/movies/"+id)}
              color="primary"
              aria-label="Movie deatails">
              <InfoIcon />
            </IconButton>

            <IconButton className="movie-show-button"
              onClick={() => setShow(!show)}
              color="primary"
              aria-label={show ? "Hide" : "Show"}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>
          <p className="movie-rating">⭐{rating}</p>
        </div>
        {show ? <p>{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />

          {EditMovieButton}
          {DeleteMovieButton}

      </CardActions>
    </Card>
  );
}
// export function Movie({ name, poster, rating, summary, id,setMovies,movies}) {
//   const [show, setShow] = useState(true);
//   // const history =useHistory();
//   return (
//     <Card className="movie-container">

//       <img className="movie-poster" src={poster} alt={name} />
//       <CardContent>
//         <div className="movie-specs">
//           <h3 className="movie-name">{name}

//           <IconButton 
//               // onClick={() => history.push("/movies/"+id)}
//               color="primary"
//               aria-label="Movie deatails">
//               <InfoIcon />
//             </IconButton>

//             <IconButton className="movie-show-button"
//               onClick={() => setShow(!show)}
//               color="primary"
//               aria-label={show ? "Hide" : "Show"}>
//               {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </IconButton>
//           </h3>
//           <p className="movie-rating">⭐{rating}</p>
//         </div>
//         {show ? <p>{summary}</p> : ""}
//       </CardContent>
//       <CardActions>
//         <Counter />

//         <IconButton style={{marginLeft:"auto"}} color="secondary" aria-label="Edit movie"><EditIcon /></IconButton>

//         <IconButton onClick={()=>{
//           console.log(id,movies);
//           const remainingMovies=movies.filter((mv,index)=>index !== id);
//           console.log(remainingMovies);
//           setMovies(remainingMovies);
//         }}
//         color="error" 
//         aria-label="Delete movie">
//           <DeleteIcon />
//           </IconButton>

//       </CardActions>
//     </Card>
//   );
// }
