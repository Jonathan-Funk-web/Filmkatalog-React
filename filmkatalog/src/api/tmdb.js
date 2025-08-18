const tmdbkey = process.env.REACT_APP_TMDB_KEY;
const omdbkey = process.env.REACT_APP_OMDB_KEY;
const tmdb_base_URL = "https://api.themoviedb.org/3/"

// export async function searchMovies(query) {
//     const res = await fetch(`${tmdb_base_URL}/search/movie?api_key=${tmdbkey}&query=${query}`);
//     if (!res.ok) throw new Error("Failed to fetch movies");
//     return res.json();
// }

// export async function getMovieDetails(id) {
//     const res = await fetch(`${tmdb_base_URL}/movie/${id}?api_key=${tmdbkey}`);
//     if (!res.ok) throw new Error("Failed to fetch movie details");
//     return res.json();
// }

export async function fetchPost(query) {
    try {
        let response = await fetch(`${tmdb_base_URL}/search/movie?api_key=${tmdbkey}&query=${query}`);
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

