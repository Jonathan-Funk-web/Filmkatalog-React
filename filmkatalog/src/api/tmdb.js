const tmdbkey = process.env.REACT_APP_TMDB_KEY;
const omdbkey = process.env.REACT_APP_OMDB_KEY;
const tmdb_base_URL = "https://api.themoviedb.org/3/"

export async function fetchMovie(query) {
    try {
        let response = await fetch(`${tmdb_base_URL}/search/movie?api_key=${tmdbkey}&query=${query}`);
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

