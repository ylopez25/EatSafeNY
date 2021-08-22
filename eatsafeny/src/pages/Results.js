import React from 'react'
import TopSearchBar from '../components/TopSearchBar.js'
import ResultsList from '../components/ResultsList.js'

function Results(props) {
    return (
        <div>
            <p>Results</p>
            <TopSearchBar {...props}/>
            {props.error ? <p>Sorry, no search results found </p> : null}
            <ResultsList {...props} />
        </div>
    )
}

export default Results
