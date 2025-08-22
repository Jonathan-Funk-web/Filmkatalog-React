import { useState } from "react";
import { fetchMovieDetails, fetchMovieSearchByName } from "../api/tmdb.js"

export default function AddMovie() {
    const [name, setName] = useState("");

    //I have to have the functions below be async and have a "await" so that i can actualy get the data from the promise, this is however probably a shit way to implement it however it works :)
    const handleMovieSearch = async (e) => {
        e.preventDefault(); //This is to prevent the form from reloading the page
        let data = await fetchMovieSearchByName(name);
        console.log(data);
    }
    const handleMovieIDSearch = async (e) => {
        e.preventDefault(); //This is to prevent the form from reloading the page
        let data = await fetchMovieDetails(name);
        console.log(data);
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