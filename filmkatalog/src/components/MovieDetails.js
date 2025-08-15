export default function MovieDetails({ movie }) {
  if (!movie) return <section className="movie-details">Select a movie to see details</section>;

  const releaseYear = new Date(movie.release_date).getFullYear();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + "${tmdbkey}"
    }
  };

  return (
    <section className="movie-details">
      <h2 className="movie-details-title">{movie ? `${movie.title}` : "No movie selected"}</h2>
      <h3 className="movie-details-year">{movie ? `(${releaseYear})` : ""}</h3>
      
      <hr></hr>

      <p className="movie-details-description">{movie ? `${movie.overview}` : "No description"}</p>
    </section>

  );
}