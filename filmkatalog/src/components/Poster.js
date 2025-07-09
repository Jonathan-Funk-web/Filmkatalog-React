

export default function Poster({ movie }) {

  const fallbackUrl = "https://placehold.co/500x400?text=Missing+Poster"
  const baseUrl = "https://image.tmdb.org/t/p/w500"

  const fullPosterUrl = movie.poster_path ? `${baseUrl}${movie.poster_path}` : fallbackUrl;
  console.log("movie.poster_path:", movie.Poster);

  const handleImgError = (e) => {
    e.target.src = fallbackUrl;
  };

  return (
    <figure className="poster">
      <img 
        src={fullPosterUrl}
        alt={`${movie.title} Poster`}
        onError={handleImgError}>
      </img>
    </figure>
  );
}