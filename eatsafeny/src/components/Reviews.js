import React from "react";
import Review from "./Review";
import { v4 as uuidv4 } from 'uuid';
import Carousel from "react-bootstrap/Carousel";


function Reviews() {
  const reviews = [
    {
      img: "https://media.beam.usnews.com/56/92f07a314c06b4a5fd0557a61c8b3d/media:9da6a49f3149473fa1020b2052a28f64Virus_Outbreak_New_York_75116.jpg",
      date: "08/25/20",
      rating: "4/5",
      review:
        "We didn't need masks for being vaccinated and all staff were wearing masks. It was a great experience and felt safe. Definately recommend.",
    },
    {
      img: "https://cdn.nrf.com/sites/default/files/styles/crop_1027_547/public/2020-08/social%20distance%20dining.jpg?itok=G_iuEEnd",
      date: "07/07/20",
      rating: "5/5",
      review:
        "There is outside seating available and they had these cute isolated cubicles. Not only is it relaxing but I felt super safe.",
    },
    {
      img: "https://www.inquirer.com/resizer/0D8knk6HZ27I8amKWlqNIyNGUXc=/arc-anglerfish-arc2-prod-pmn/public/MLMTB2ZKDZH3VG666NKPME3YII.jpg",
      date: "08/01/20",
      rating: "5/5",
      review: "No vaccination. No entry. Plus they check Id's. So legit.",
    },
  ];
  return (
    <div className="carousel">
      <Carousel>
        {reviews.map((review) => {
          return (
            <Carousel.Item key={uuidv4()} className="slide1">
              <Review review={review} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Reviews;