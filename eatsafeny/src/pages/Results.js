import React from 'react'
import TopSearchBar from '../components/TopSearchBar.js'
import ResultsList from '../components/ResultsList.js'

function Results(props) {
    return (
        <div>
            <TopSearchBar {...props}/>
<<<<<<< HEAD
            <h2 id="search-h2">Search Results</h2>
=======
            <div className="search">
            <h2>Search Results</h2>
            </div>
>>>>>>> 2989f5fc865c306bdc916e38dbafda4271f67b07
            {props.error ? <p>Sorry, no search results found </p> : null}
            <ResultsList {...props} />
        </div>
    )
}

export default Results
