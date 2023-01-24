import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <>
    <h1>Directors Page</h1>
    {directors.map(director => (
      <div key={director.name}>
        <p>Director: {director.name}</p>
        <ul>
          {director.movies.map(movie => (
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </>)
}

export default Directors;
