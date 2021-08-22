import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Reviews() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
width="200px" height="400px"
      className="d-block w-100"
      src="https://media.beam.usnews.com/56/92f07a314c06b4a5fd0557a61c8b3d/media:9da6a49f3149473fa1020b2052a28f64Virus_Outbreak_New_York_75116.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Date: 08/25/20</h3>
      <h4>Rating: 4/5</h4>
      <h4>Review: We didn't need masks for being vaccinated and all staff were wearing masks. It was a great experience and felt safe. Definately recommend.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
 width="100px" height="400px"
      className="d-block w-100"
      src="https://cdn.nrf.com/sites/default/files/styles/crop_1027_547/public/2020-08/social%20distance%20dining.jpg?itok=G_iuEEnd"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Date:07/07/20</h3>
      <h4>Rating:5/5</h4>
      <p>Review:There is outside seating available and they had these cute isolated cubicles. Not only is it relaxing but I felt super safe.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
 width="200px" height="400px"
      className="d-block w-100"
      src="https://www.inquirer.com/resizer/0D8knk6HZ27I8amKWlqNIyNGUXc=/arc-anglerfish-arc2-prod-pmn/public/MLMTB2ZKDZH3VG666NKPME3YII.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Date: 08/01/20</h3>
      <h4>Rating: 5/5</h4>
      <p>Review: No vaccination. No entry. Plus they check Id's. So legit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Reviews