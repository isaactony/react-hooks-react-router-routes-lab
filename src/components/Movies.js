import React from "react";
import { movies } from "../data";

function Movies() {
 
  return (
    <>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          <p>Title: {movie.title}</p>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
   
  );
    
  
}

export default Movies;
