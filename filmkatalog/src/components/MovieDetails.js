export default function MovieDetails({ movie }) {
  return (
    <section className="movie-details">
      <h2>{movie?.title || "No movie selected"}</h2>
    </section>
  );
}