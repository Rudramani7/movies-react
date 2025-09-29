import React, { useEffect, useState } from "react";
import './App.css';
import { MovieList } from './MovieList';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ColorList } from './ColorList';
import { AddMovie } from './AddMovie';
import { EditMovie } from "./EditMovie";
import { Welcome } from "./Welcome";
import { TicTacToe } from "./TicTacToe";
import { MovieDetails } from "./MovieDetails";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { NotFound } from "./NotFound";

function App() {
  const INITIAL_MOVIES = [
    {
      name: "Spider-man",
      poster: "https://lumiere-a.akamaihd.net/v1/images/au_article_disneyplus_poster_avatar_a6e36ee1.png",
      rating: 8,
      summary: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology...",
      trailer: "",
    },
    {
      name: "Avengers",
      poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      rating: 8.8,
      summary: "After Thanos, an intergalactic warlord, disintegrates half of the universe...",
      trailer: "",
    },
    {
      name: "K.G.F",
      poster: "https://wallpapercave.com/wp/wp4019377.jpg",
      rating: 8.6,
      summary: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother...",
      trailer: "",
    },
  ];

  const [mode, setMode] = useState("dark");
  const [movies, setMovies] = useState(INITIAL_MOVIES);

  const theme = createTheme({
    palette: { mode },
  });

  useEffect(() => {
    fetch("https://61a2f200014e1900176dea61.mockapi.io/movies/")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }} elevation={4}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* NavLink buttons */}
              <Button
                component={NavLink}
                to="/Welcome"
                startIcon={<HomeIcon />}
                color="inherit"
                sx={{ "&.active": { backgroundColor: "rgba(255,255,255,0.2)", fontWeight: "bold" } }}
              >
                Home
              </Button>

              <Button
                component={NavLink}
                to="/movies/"
                startIcon={<TheatersIcon />}
                color="inherit"
                sx={{ "&.active": { backgroundColor: "rgba(255,255,255,0.2)", fontWeight: "bold" } }}
              >
                Movies
              </Button>

              <Button
                component={NavLink}
                to="/movies/add"
                startIcon={<AddIcon />}
                color="inherit"
                sx={{ "&.active": { backgroundColor: "rgba(255,255,255,0.2)", fontWeight: "bold" } }}
              >
                Add Movie
              </Button>

              <Button
                component={NavLink}
                to="/color-game"
                startIcon={<PaletteIcon />}
                color="inherit"
                sx={{ "&.active": { backgroundColor: "rgba(255,255,255,0.2)", fontWeight: "bold" } }}
              >
                Color Game
              </Button>

              <Button
                component={NavLink}
                to="/tic-tac-toe"
                startIcon={<SportsEsportsIcon />}
                color="inherit"
                sx={{ "&.active": { backgroundColor: "rgba(255,255,255,0.2)", fontWeight: "bold" } }}
              >
                Tic Tac Toe
              </Button>

              <Button
                startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                style={{ marginLeft: "auto" }}
                color="inherit"
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate replace to="/Welcome" />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/movies/" element={<MovieList movies={movies} setMovies={setMovies} />} />
            <Route path="/movies/add" element={<AddMovie movies={movies} setMovies={setMovies} />} />
            <Route path="/movies/edit/:id" element={<EditMovie movies={movies} setMovies={setMovies} />} />
            <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
            <Route path="/color-game" element={<ColorList />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
