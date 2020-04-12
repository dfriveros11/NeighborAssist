import React, { useState, useEffect } from "react";
import GoogleMap from "./GoogleMap.js";
import FavorList from "./FavorList.js";

const HelpSomeone = () => {
  const [favors, setFavors] = useState(null);
  const [currentFavor, setCurrentFavor] = useState(null);

  useEffect(() => {
    fetch("/getAllFavors")
      .then((response) => response.json())
      .then((data) => {
        setFavors(data);
      });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.parentElement.parentElement);
    event.target.innerHTML = "You're now helping this person";
  };

  return (
    <div className="container">
      <h1>Help someone near you</h1>
      <div className="row">
        <div className="col-md-6">
          <FavorList favors={favors} handleClick={handleClick}></FavorList>
        </div>
        <div className="col-6 col-md-6">
          <GoogleMap favors={favors}></GoogleMap>
        </div>
      </div>
    </div>
  );
};
export default HelpSomeone;
