// U09226075
// App.js

import React, { useState } from 'react';
import './App.css';


// Sample movies.
const movies = [
  {
      "title": "Finding Nemo",
      "rating": 0,
      "description": "A clownfish named Marlin who embarks on an epic journey across the ocean to find his son, Nemo, after he is captured and placed in a dentist's aquarium.",
      "release date": "May 30, 2003"
  },
  {
      "title": "Up",
      "rating": 0,
      "description": "The story follows an elderly man named Carl Fredricksen who fulfills his lifelong dream of adventure when he ties thousands of balloons to his house and flies away to South America, accompanied by a young boy named Russell.",
      "release date": "May 29, 2009"
  },
  {
      "title": "Monsters Inc.",
      "rating": 0,
      "description": "In this Pixar classic, two monsters from the world of children's nightmares navigate the complex emotions that come with maintaining their fear-inducing jobs at Monsters Incorporated, all while dealing with the unexpected arrival of a human child.",
      "release date": "November 2, 2001"
  },
  {
      "title": "Cars",
      "rating": 0,
      "description": "Set in a world populated entirely by anthropomorphic cars, the film centers on Lightning McQueen, a hotshot race car, who learns valuable lessons about friendship and teamwork while participating in the Piston Cup Championship.",
      "release date": "June 9, 2006"
  },
  {
      "title": "Ponyo",
      "rating": 0,
      "description": "A young boy befriends a goldfish in a coastal town, leading to magical events as Ponyo, a small fish with big dreams, transforms into a girl and sets off to explore her new life on land, causing chaos and bringing joy to everyone she meets.",
      "release date": "August 14, 2009"
  }
];



// Create rate movie button.
function RateMovieButton({movie, onRatingChange}) {
  const [rating, setRating] = useState(movie.rating);
  return (
    <div className='rating-container'>
      <div className='stars'>
        {[...Array(5)].map((star, index) => {
          return (
            <ReviewStar index={index} rating={rating} onSelectionChange={(index) => {
              setRating(index)
            }}/>
          )
        })}
      </div>
      <div>
        <button className='rating-set-button' onClick={() => onRatingChange(rating)}>Submit Rating</button>
      </div>
    </div>
    )};

  function ReviewStar({index, rating, onSelectionChange}) {
    return (
      <span className={index <= rating ? "fa fa-star fill-star fa-2x" : "fa fa-star fa-2x"}
            onClick={() => onSelectionChange(index)}></span>
    )
  };


  // Craete dynamic movie selector.
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
  };

  function findMovieByTitle(title) {
    if (!title) {
      return { title: "", rating: 0, description: "", "release date": ""}
    }
    return movies.find((value, index, movies) => {
      return value.title === title
    })
  };



// Create App.
function App() {
  return (
    <div className="App">
      {/* Movie Selector */}
      <MovieSelector movie={movie} onChange={(movie) => {
        setMovie(movie)
      }}/>
      {/* Movie Rating */}
      <h3>Rate the movie from 1 to 5 stars:</h3>
      <RateMovieButton key={movie.title} movie={movie} onRatingChange={(rating) => {
        movie.rating = rating
        alert(`Review for "${movie.title}" recieved!`);
      }}/>
    </div>
  );
}

export default App;



