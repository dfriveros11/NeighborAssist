import React from "react";
//import GoogleMaps2 from "../AskForAFavor/GoogleMaps2.js";

const MyFavorHelper = (props) => {
  const cancelFavor = () => {
    console.log("cancel");
    fetch("/helperCancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.currentFavor._id }),
    });
  };

  const completeFavor = () => {
    console.log("Done");

    fetch("/markDone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.currentFavor._id }),
    });
  };

  let innerhalb = (
    <h1>Click on one of the favors on the left to se it's details </h1>
  );

  if (props.currentFavor != null) {
    let alert = "alert alert-dark";
    if (props.currentFavor.status === "Done") {
      alert = "alert alert-sucess";
    } else if (props.currentFavor.status === "In Progress") {
      alert = "alert alert-warning";
    }
    innerhalb = (
      <div className="card" id="detailCard">
        <h5 className="card-header" id="detailCardHeader">
          {props.currentFavor.title}
        </h5>
        <div className="card-body">
          <div>
            <div className={alert} role="alert">
              Status: {props.currentFavor.status}
            </div>
            <h5 className="card-title">
              You are helping {props.currentFavor.helpee}
            </h5>
            <p className="card-text">
              Description: {props.currentFavor.description}
            </p>
            <h5 className="card-title">
              {props.currentFavor.helpee}'s contact
            </h5>
            <p className="card-text">Email</p>
            <p className="card-text">Phone number</p>
          </div>
          <br />
          <div>
            <button className="btn btn-success btn-lg" onClick={completeFavor}>
              Mission accomplished
            </button>
            <button className="btn btn-danger btn-lg" onClick={cancelFavor}>
              I have to cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div>{innerhalb}</div>;
};

export default MyFavorHelper;
