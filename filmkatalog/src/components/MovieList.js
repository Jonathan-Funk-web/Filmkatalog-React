import MovieData from '../data/MovieData.json'


export default function MovieList({ movies, onMovieSelect }) {


  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onMovieSelect(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}