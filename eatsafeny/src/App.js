import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react'
import Home from './pages/Home'
import Results from './pages/Results'
import DetailedView from './pages/Detailedview'
import Logo from './components/Logo'
import apiURL from './util/apiURL'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [searchQueries, setSearchQueries] = useState({
    name: "",
    borough: "",
    letterGrade: ""
  })
  const [restaurants, setRestaurants] = useState([])
  const [error, setError] = useState(false)


  const handleUserInput = (newInput) =>{
    setSearchQueries(newInput)
  }

  const searchRestaurant = async () => {
    const { name, borough, letterGrade } = searchQueries
    try {
      if (name) {
        let results = await apiURL.getDba(name)
        results = results.filter(result => result.boro === borough)
          if (letterGrade){
            results = results.filter(result => result.grade === letterGrade)
          }
          console.log(results)
        setRestaurants(results)

      } else if (borough && !name) {
        let results = await apiURL.getBoro(borough)
        console.log(results)
          if (letterGrade){
            results = results.filter(result => result.grade === letterGrade)
          }
        setRestaurants(results)
      }

      setError(false)

    } catch (error) {
      console.warn("catch", error);
      setError(true)
    }

    setSearchQueries({
      name: "",
      borough: "",
      letterGrade: ""  
    })
  }


  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/">  
          <Home value={searchQueries} onChange={handleUserInput}/>
        </Route>
        <Route path="/results/:id"> 
          <DetailedView value={searchQueries} onChange={handleUserInput} searchRestaurant={searchRestaurant}/>
        </Route>
        <Route path="/results"> 
          <Results value={searchQueries} onChange={handleUserInput} searchRestaurant={searchRestaurant} restaurants={restaurants} error={error}/>
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
