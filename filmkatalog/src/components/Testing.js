import { useState } from "react";
import ReactDOM from "react-dom/client";

function Testing() {
    const [color, setColor] = useState("red");

    return (
    <>
        <h1>My favorite color is {color}!</h1>
        <button
        type="button"
        onClick={() => setColor("blue")}
        >Blue</button>
    </>
    )
}

export default Testing
// This component is just for me testing around how to use components