// U09226075
// App.js

import React, { useState } from 'react';
import './App.css';
import RateMovieButton, {UploadButton} from './Buttons.js';
import MovieSelector from './MovieSelector.js';
// import { useState } from 'react';
import { movies } from "./movies.js"



// Create App.
function App() {
  const [movie, setMovie] = useState(movie[0])
  return (
    <div className="App">

      {/* Movie Selector */}
      <div>
      <MovieSelector movie={movie} onChange={(movie) => {
        setMovie(movie)
      }}/>
      </div>
      <div className='movie-description'>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <strong>{movie["release date"]}</strong>
      </div>

      {/* Upload Button */}
      <div>
        <UploadButton/>
      </div>

      {/* Movie Rating */}
      <div>
      <h3>Rate the movie from 1 to 5 stars:</h3>
      <RateMovieButton key={movie.title} movie={movie} onRatingChange={(rating) => {
        movie.rating = rating
        alert(`Review for "${movie.title}" recieved!`);
      }}/>
      </div>

    </div>
  );
}


export default App;



