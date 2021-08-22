import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Review({review}) {
  return (
    <>
        <img
          width="200px"
          height="400px"
          className="d-block w-100 review-img"
          src={review.img}
          alt="review Review"
        />
        <Carousel.Caption>
          <h4>Date: {review.date}</h4>
          <h4>Rating: {review.rating}</h4>
          <h4>
            Review: {review.review}
          </h4>
        </Carousel.Caption>
    </>
  );
}

export default Review;
