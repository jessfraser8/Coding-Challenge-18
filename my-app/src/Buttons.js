import {useEffect, useState} from "react";

// Create rate movie button.
export function RateMovieButton({movie, onRatingChange}) {
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
      )}
  
function ReviewStar({index, rating, onSelectionChange}) {
    return (
     <span className={index <= rating ? "fa fa-star fill-star fa-2x" : "fa fa-star fa-2x"}
         onClick={() => onSelectionChange(index)}></span>
    )
}
  

// Create upload button.
export function UploadButton() {
  return (
    <button onClick={() => {
        setTimeout(() => {alert("Upload complete!")}, 1000)
    }}>Upload Image</button>
  )
}

    export default RateMovieButton
  
  