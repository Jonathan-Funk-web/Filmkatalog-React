import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Movie(BaseModel):
    title: str
    

class MovieList(BaseModel):
    movie_list: List[Movie]
    


app = FastAPI()

origins = [
    "http://localhost:3000/" #This is the "url" that the React part of the project is
]

# CORS blocks requests that are unwanted

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This info after here will not persist if the program is closed
memory_db = {"MovieList": []}

@app.get("/movie_list", response_model=MovieList)
def get_movielist():
    return MovieList(movie_list=memory_db["MovieList"])

@app.post("/movie_list", response_model=Movie)
def add_movie(movie: Movie):
    memory_db["MovieList"].append(movie)
    return movie

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
