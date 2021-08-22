import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Result from "../components/Result.js";


function ResultsList(props) {
  return (
    <div>
      {props.restaurants.map((restaurant) => {
        return <Result key={uuidv4()} restaurant={restaurant}/>;
      })}
    </div>
  );
}

export default ResultsList;
