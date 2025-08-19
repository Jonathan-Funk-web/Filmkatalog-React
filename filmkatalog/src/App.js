import logo from './logo.svg';
import './App.css';
import MovieData from './data/MovieData.json'
import MovieList from './components/MovieList.js'
import MovieDetails from './components/MovieDetails'
import { use, useState } from 'react';
import Poster from './components/Poster.js'
import { fetchMovieDetails } from './api/tmdb.js';

function App() {
  const [movies, setMovies] = useState(MovieData) 
  const [selectedMovie, setSelectedMovie] = useState(movies[0]) // The 0 is just to test using the first movie, later it will be chosen from the list

  const handleSearchClick = (id) => {
    let test = fetchMovieDetails(id)
    console.log("Search button clicked!", test); // Placeholder will add stuff after, this is just here so I can actualy see that the react application gets updated
  };
  
  return (
    <main className="app-container">
      <aside className="left-column">
        <MovieList movies={movies} onMovieSelect={setSelectedMovie} selectedMovie={selectedMovie} />
        <button onClick={() => handleSearchClick("123")}>Test stuff</button>
      </aside>

      <section className="middle-column">
        <MovieDetails movie={selectedMovie} />
      </section>

      <figure className="right-column">
        <Poster movie={selectedMovie} />
      </figure>
    </main>
  );
}

export default App;
