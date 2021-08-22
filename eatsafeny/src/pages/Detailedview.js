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
            <h1>Restaurant name</h1>
            <img src="lettergrade" alt="inspection letter grade"/>
            <div>
            <p>Address:</p>
            <p>Phone Number:</p>
            </div>
            <Reviews/> {`carousel`}
            <ReviewForm/>
            {/* <InspectionReview/>     */}
        </div>
    )
}

export default DetailedView;
