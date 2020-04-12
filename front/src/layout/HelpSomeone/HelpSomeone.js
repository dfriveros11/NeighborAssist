import React, { useState, useEffect } from "react";
import GoogleMap from "./GoogleMap.js";
import FavorList from "./FavorList.js";

const HelpSomeone = (props) => {
  const [favors, setFavors] = useState(null);
  //  const [currentFavor, setCurrentFavor] = useState(null);

  useEffect(() => {
    fetch("/getAllAvailableFavors")
      .then((response) => response.json())
      .then((data) => {
        setFavors(data);
      });
  }, []);

  const handleClick = (event, favor) => {
    event.preventDefault();

    fetch("/setHelper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ helperId: props.user._id, id: favor._id }),
    });
    event.target.innerHTML = "You're now helping this person";
  };

  return (
    <div className="container">
      <h1>Help someone near you</h1>
      <p>
        After clicking buttons please go to another tab or reload to see the
        changes
      </p>
      <div className="row">
        <div className="col-md-6">
          <FavorList
            favors={favors}
            handleClick={handleClick}
            help={true}
          ></FavorList>
        </div>
        <div className="col-6 col-md-6">
          <GoogleMap favors={favors}></GoogleMap>
        </div>
      </div>
    </div>
  );
};
export default HelpSomeone;
