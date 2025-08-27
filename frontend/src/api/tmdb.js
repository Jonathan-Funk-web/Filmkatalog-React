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
    try {
        const response = await fetch(tmdb_base_URL + "movie/" + movie_id, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error with fetching movie details:", err);
        throw err;
    }
}

export async function fetchMovieSearchByName(movie_name) {
    try {
        const response = await fetch(tmdb_base_URL + "search/movie?query=" + movie_name, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error with fetching movie search by name:", err);
        throw err;
    }
}