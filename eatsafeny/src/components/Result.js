import React from 'react'
import { Link } from 'react-router-dom'

function Result({restaurant}) {
    return (
        <div className="result">
            <Link to={`/results/${restaurant.camis}`}>{restaurant.dba}</Link>
        </div>
    )
}

export default Result