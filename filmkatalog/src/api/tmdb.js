const tmdbkey = process.env.REACT_APP_TMDB_KEY;
const omdbkey = process.env.REACT_APP_OMDB_KEY;
const tmdb_base_URL = "https://api.themoviedb.org/3/"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + tmdbkey
    }
};


export async function fetchMovieDetails(movie_id) {
    fetch(tmdb_base_URL + "movie/" + movie_id, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
