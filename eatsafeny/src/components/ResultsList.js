import React from "react";
import Result from "../components/Result.js";

function ResultsList(props) {
  return (
    <div>
      {props.restaurants.map((restaurant) => {
        return <Result restaurant={restaurant}/>;
      })}
    </div>
  );
}

export default ResultsList;
