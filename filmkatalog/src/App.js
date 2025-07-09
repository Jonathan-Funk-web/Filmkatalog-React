import logo from './logo.svg';
import './App.css';
import MovieData from './data/MovieData.json'
import { use, useState } from 'react';
import Poster from './components/Poster.js'

function App() {
  const [movies, setMovies] = useState(MovieData) 
  const [selectedMovie, setSelectedMovie] = useState(movies[0]) // the 0 is just to test using the first movie, later it will be chosen from the list

  return (
    <div className="App">
      <Poster movie={selectedMovie} />
    </div>
  );
}

export default App;
