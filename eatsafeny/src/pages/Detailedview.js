import React from 'react'
import SideSearchBar from '../components/SideSearchBar'
import Reviews from '../components/Reviews'
import ReviewForm from "../components/ReviewForm"

// import InspectionReview from './components/InspectionReview'

function DetailedView(props) {
    return (
        <div>
            <p>Restaurant view</p>
            <SideSearchBar {...props}/>
            <h1>MITI MITI</h1>
            <img width="200px" height="200px" src="https://www.seriouseats.com/thmb/7EkSx1qKenXAntRe0yBBNNLs4po=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__newyork.seriouseats.com__images__20100728sanitation-a8da5e2c374942af8b5acab819e7b4f8.jpg" alt="inspection letter grade"/>
            <br />
            <div>
            <p>Address: 47-10 Austell Pl</p>
            <p>Phone Number: (347)-777-4484</p>
            <p>✅ Covid-friendly</p>
            </div>
            <h2>See it to believe it.</h2>
            <h3>"From New Yorkers like you!"</h3>
            <Reviews/>
            <h4>Stay Negative!</h4>
            <h4> Leave a Review.</h4>
            <ReviewForm/>
            {/* <InspectionReview/>     */}
        </div>
    )
}

export default DetailedView;
