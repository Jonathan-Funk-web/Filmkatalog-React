const tmdbkey = process.env.REACT_APP_TMDB_KEY;
const omdbkey = process.env.REACT_APP_OMDB_KEY;

export default function MovieDetails({ movie }) {
  if (!movie) return <section className="movie-details">Select a movie to see details</section>;

  const releaseYear = new Date(movie.release_date).getFullYear();


  return (
    <section className="movie-details">
      <h2 className="movie-details-title">{movie ? `${movie.title}` : "No movie selected"}</h2>
      <h3 className="movie-details-year">{movie ? `(${releaseYear})` : ""}</h3>
      
      <hr></hr>

      <p className="movie-details-description">{movie ? `${movie.overview}` : "No description"}</p>
    </section>

  );
}