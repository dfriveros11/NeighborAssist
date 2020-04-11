import React, { useState } from "react";
import GoogleMaps2 from "../AskForAFavor/GoogleMaps2.js";
import FavorList from "./FavorList.js";

const HelpSomeone = () => {
  const [favors, setFavors] = useState(null);

  const getFavors = () => {
    fetch("/getAllFavors")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFavors(data);
      });
  };
  for (var i = 0; i < 1; i++) {
    getFavors();
  }
  return (
    <div className="container">
      <h1>Help someone near you</h1>
      <div className="row">
        <div className="col-md-6">
          <FavorList favors={favors}></FavorList>
        </div>
        <div className="col-6 col-md-6">
          <GoogleMaps2 latitude={14} longitude={14}></GoogleMaps2>
        </div>
      </div>
    </div>
  );
};
export default HelpSomeone;
