// U09226075
// App.js

import React, { useState } from 'react';
import './App.css';


function RateMovieButton() {
  const [rating, setRating] = useState(null);
  return(
    <div className='rating'>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return(
          <label>
            <input class="fa fa-star fa-2x" type='radio' name='rating' value={currentRating} onClick={() => setRating(currentRating)}/>
            {/* <span class="fa fa-star"></span> */}
          </label>
        )
      })}
      <p>Rating: {rating} stars</p>
      
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <h3>Rate the movie from 1 to 5 stars:</h3>
      <RateMovieButton/>
    </div>
  );
}

export default App;


