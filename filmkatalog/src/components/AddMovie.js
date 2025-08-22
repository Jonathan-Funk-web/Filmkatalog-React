import { useState } from "react";
import { fetchMovieDetails, fetchMovieSearchByName } from "../api/tmdb.js"

export default function AddMovie() {
    const [name, setName] = useState("");

    const handleMovieSearch = (e) => {
        e.preventDefault(); //This is to prevent the form from reloading the page
        fetchMovieSearchByName(name)
    }
    const handleMovieIDSearch = (e) => {
        e.preventDefault(); //This is to prevent the form from reloading the page
        fetchMovieDetails(name)
    }

    function handleChange(e) {
        setName(e.target.value);
    }


    return (
        <form>
            <label>Enter movie name:
                <input type="text"
                    placeholder="Godfather"
                    value={name} 
                    onChange={handleChange}
                />
            </label><br/>
            <button onClick={handleMovieSearch}>Search Movie</button>
            <button onClick={handleMovieIDSearch}>Search ID</button>
        </form>
    );
}