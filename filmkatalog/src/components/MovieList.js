import MovieData from '../data/MovieData.json'


export default function MovieList({ movies, onMovieSelect, selectedMovie }) {


  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onMovieSelect(movie)}
        className={selectedMovie?.id === movie.id ? "selected" : ""}/*This is just here so that if i select it, it gets the "selected" classname */>
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </li>
      ))}
    </ul>
  );
}