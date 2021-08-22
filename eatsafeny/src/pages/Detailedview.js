import React, { useState, useEffect } from 'react'
import SideSearchBar from '../components/SideSearchBar'
import Reviews from '../components/Reviews'
import ReviewForm from "../components/ReviewForm"
import { useParams } from 'react-router-dom'
import apiURL from "../util/apiURL";


function DetailedView(props) {
    const [restaurant, setRestaurant] = useState([])
    let { id } = useParams()

    useEffect(()=>{
        async function fetchMyAPI(){
            let results = await apiURL.getCamis(id)
            setRestaurant(results[0])
        }

        fetchMyAPI()
    }, [id])

    const LetterGrade = () => {
        let grade = restaurant.grade
        let img = ""

        switch (grade) {
            case "A":
                img = "https://www.seriouseats.com/thmb/7EkSx1qKenXAntRe0yBBNNLs4po=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__newyork.seriouseats.com__images__20100728sanitation-a8da5e2c374942af8b5acab819e7b4f8.jpg"
                break;
            case "B":
                img = "https://media.wnyc.org/media/photologue/photos/Grade%20Card_B_v2.jpg"
                break;
            case "C":
                img = "https://media.wnyc.org/media/photologue/photos/Grade%20Card_C_v2.jpg"
                break;
            default:
                img = "https://media.wnyc.org/media/photologue/photos/Grade%20Card_GradePending_v2.jpg"
        }

        return img
    }

    return (
        <div>
            <p>Restaurant view</p>
            <SideSearchBar {...props}/>
            <h1>{restaurant.dba}</h1>
            <img width="200px" height="200px" src={LetterGrade()} alt="inspection letter grade"/>
            <br />
            <div>
            <p>Address: {restaurant.building} {restaurant.street} {restaurant.boro}, N.Y {restaurant.zipcode}</p>
            <p>Phone Number: {restaurant.phone}</p>
            <p>✅ Covid-safe</p>
            </div>
            <h2>See it to believe it.</h2>
            <h3>"From New Yorkers like you!"</h3>
            <Reviews/>
            <h4>Stay Negative!</h4>
            <h4> Leave a Review.</h4>
            <ReviewForm/>
        </div>
    )
}

export default DetailedView;
