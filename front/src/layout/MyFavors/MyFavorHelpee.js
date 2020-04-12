import React from "react";

const MyFavorHelpee = (props) => {
  const cancelFavor = (event) => {
    console.log("cancel");

    fetch("/markDone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.currentFavor._id }),
    });
    event.target.innerHTML = "Cancelled";
  };

  let innerhalb = (
    <h1>Click on one of the favors on the left to see it's details </h1>
  );
  if (props.currentFavor != null) {
    let alert = "alert alert-dark";
    let disp = false;
    if (props.currentFavor.status === "Done") {
      alert = "alert alert-sucess";
    } else if (props.currentFavor.status === "In Progress") {
      alert = "alert alert-warning";
      disp = true;
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
            {disp ? (
              <div>
                <h5 className="card-title">
                  You are being helped by {props.currentFavor.helper}
                </h5>
                <h5 className="card-title">
                  Here's {props.currentFavor.helper}'s contact
                </h5>
                <p className="card-text">Email</p>
                <p className="card-text">Phone number</p>
                <br />
              </div>
            ) : (
              <div>
                <h3>We are currently looking for someone to help you</h3>
              </div>
            )}
          </div>
          <div>
            <button className="btn btn-danger btn-lg" onClick={cancelFavor}>
              I don't need help anymore
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div>{innerhalb}</div>;
};

export default MyFavorHelpee;
