  import { useState } from "react";
  import { movies } from "./movies.js"
  
  
  // Create dynamic movie selector.
  function MovieSelector({movie, onChange}) {
    return (
      <div className='movie-selector'>
        <label htmlFor='movie picker'>Choose a movie</label>
        <select name='movie-picker' defaultValue={movie.title} onChange={(e) => {onChange(findMovieByTitle(e.target.value))}}>
          {movies.map((movie) => {
            return (
              <option>
                {movie.title}
              </option>
            )
          })}
        </select>      
      </div>
    )
  }

  function findMovieByTitle(title) {
    if (!title) {
      return { title: "", rating: 0, description: "", "release date": ""}
    }
    return movies.find((value, index, movies) => {
      return value.title === title
    })
  }

  export default MovieSelector;