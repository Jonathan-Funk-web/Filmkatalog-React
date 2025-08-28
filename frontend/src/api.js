import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000" // this is the api for the backend
});

export default api;