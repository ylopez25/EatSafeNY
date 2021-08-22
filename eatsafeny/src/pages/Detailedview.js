import React from 'react'
import SideSearchBar from '../components/SideSearchBar'
import Reviews from '../components/Reviews'
import ReviewForm from "../components/ReviewForm"
// import InspectionReview from './components/InspectionReview'

function DetailedView() {
    return (
        <div>
            <p>Restaurant view</p>
            <SideSearchBar/>
            <h1>Restaurant name</h1>
            <img src="lettergrade"/>
            <div>
            <p>Address:</p>
            <p>Phone Number:</p>
            </div>
            <Reviews/>  //carsousel
            <ReviewForm/>
            {/* <InspectionReview/>     */}
        </div>
    )
}

export default DetailedView;
