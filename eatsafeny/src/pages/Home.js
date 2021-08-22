import React from 'react'
import TopSearchBar from '../components/TopSearchBar.js'

function Home(props) {
    return (
        <div className="home"> 
            <p>Your search engine for the safest places to eat during the Covid-19 Pandemic.</p>
            <TopSearchBar {...props}/>
        </div>
    )
}

export default Home
