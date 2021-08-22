import React from 'react'
import TopSearchBar from '../components/TopSearchBar.js'

function Home(props) {
    return (
        <div className="home">            
            <TopSearchBar {...props}/>
        </div>
    )
}

export default Home
