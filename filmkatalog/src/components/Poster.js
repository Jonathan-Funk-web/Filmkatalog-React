
const fallbackUrl = "https://placehold.co/600x400?text=Missing+Poster"

export default function Poster(props) {

  const handleImgError = (e) => {
    e.target.src = fallbackUrl;
  };

  return (
    <figure className="poster">
    <img src={ props.src } alt={`${props.title} Poster`} onError={handleImgError}></img>
    </figure>
  );
}