import React,{ useEffect } from "react";
import './App.css';
import { MovieList } from './MovieList';
import {Routes,Route,Link} from "react-router-dom";
import {ColorList} from './ColorList';
import {useState} from "react";
import { AddMovie } from './AddMovie';
import { EditMovie } from "./EditMovie";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Paper from '@mui/material/Paper';
import { Welcome } from "./Welcome";
import { TicTacToe } from "./TicTacToe";
import { MovieDetails } from "./MovieDetails";
 function App() {
  const INITIAL_MOVIES = [
    {
      name: "Avatar",
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg",
      rating: 8.5,
      summary: "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
      trailer:"",
    },
    {
      name: "Spider-man",
      poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
      rating: 8,
      summary: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
      trailer:"",
    },
    {
      name: "Avengers",
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      rating: 8.8,
      summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      trailer:"",
    },
    {
      name: "K.G.F",
      poster: "https://wallpapercave.com/wp/wp4019377.jpg",
      rating: 8.6,
      summary: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia.",
      trailer:"",
    },
  ];
  const[mode,setMode]=useState("dark");
  const [movies, setMovies] = useState(INITIAL_MOVIES);
    // const history=useHistory();
  const theme=createTheme({
    palette:{
      mode:mode,
    },
  });
   
  useEffect(()=>{
  fetch("https://61a2f200014e1900176dea61.mockapi.io/movies")
.then((data) => data.json())
.then((mvs)=> setMovies(mvs));
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{minHeight:"100vh"}} elevation={4}>
    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar>
          <Button startIcon={<HomeIcon/>}
          // onClick={()=>history.push("/Welcome")}
          ><Link style={{textDecoration:'none'}} to="/Welcome">Home</Link></Button>
          <Button startIcon={<TheatersIcon/>}
          // onClick={()=>history.push("/movies")}
          ><Link style={{textDecoration:'none'}} to="/movies">Movies</Link></Button>
          <Button startIcon={<AddIcon/>}
        // onClick={()=>history.push("/movies/add")}
        ><Link style={{textDecoration:'none'}} to="/movies/add">Add movies</Link></Button>
          <Button startIcon={<PaletteIcon/>}
          // onClick={()=>history.push("/color-game")}
          ><Link style={{textDecoration:'none'}} to="/color-game">Color Game</Link></Button>
          <Button startIcon={<SportsEsportsIcon/>}>
          {/* onClick={()=>history.push("/tic-tac-toe")} */}
          <Link style={{textDecoration:'none'}} to="/tic-tac-toe">Tic Tac Toe</Link></Button>
          <Button 
          startIcon={mode==="light"?<Brightness4Icon /> : <Brightness7Icon />}
          onClick={()=>setMode(mode==="light"?"dark":"light")}
          style={{marginLeft:"auto"}}color="inherit">
          {mode==="light"?"dark":"light"} mode
          </Button>
     </Toolbar>
    </AppBar>
    </Box>
<Routes>
<Route path="/Welcome" element={<Welcome/>} />
<Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
<Route path="/movies/add"  element={<AddMovie movies={movies} setMovies={setMovies} />}/>
<Route path="/movies/edit/:id" element={<EditMovie movies={movies} setMovies={setMovies} />}/>
<Route path="/movies/:id" element={<MovieDetails movies={movies}/>}/>
<Route path="/color-game" element={<ColorList/>} />
<Route path="/tic-tac-toe"  element={<TicTacToe/>}/>
{/* <Route path="**" element={<NotFound/>}/> */}
</Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;