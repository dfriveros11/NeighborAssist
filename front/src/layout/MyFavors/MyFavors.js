import React, { useEffect, useState } from "react";
import MyFavorHelper from "./MyFavorHelper.js";
import MyFavorHelpee from "./MyFavorHelpee.js";
import FavorList from "../HelpSomeone/FavorList.js";

//change to specific user
const MyFavors = (props) => {
  const [favors, setFavors] = useState(null);
  const [currentFavor, setCurrentFavor] = useState(null);

  const fetchDecisions = () => {
    if (props.user.userType)
      return fetch(`/getAllFavorsHelper/${props.user._id}`)
        .then((response) => response.json())
        .then((data) => {
          setFavors(data);
        });
    else
      return fetch(`/getAllFavorsHelpee/${props.user._id}`)
        .then((response) => response.json())
        .then((data) => {
          setFavors(data);
        });
  };

  useEffect(() => {
    fetchDecisions();
  }, []);

  const handleClick = (event, favor) => {
    event.preventDefault();
    setCurrentFavor(favor);
  };

  return (
    <div className="container">
      <h1>My favors</h1>
      <div className="row">
        <div className="col-md-6">
          <FavorList
            favors={favors}
            handleClick={handleClick}
            help={false}
          ></FavorList>
        </div>
        <div className="col-6 col-md-6">
          <div className="row">
            {props.user.userType ? (
              <MyFavorHelper currentFavor={currentFavor}></MyFavorHelper>
            ) : (
              <MyFavorHelpee currentFavor={currentFavor}></MyFavorHelpee>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavors;
