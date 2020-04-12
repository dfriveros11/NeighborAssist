import React from "react";
import GoogleMap from "./../GoogleMap";
import FormSignUPIN from "./FormSignUPIN.js";
import Message from "./Message.js";

const MainPage = (props) => {
  console.log("MAINPAGEUSER", props.user);
  return (
    <div className="container">
      <h1> Neighbor Assist</h1>
      <div className="row">
        <div className="col-md-8">
          <GoogleMap></GoogleMap>
        </div>
        <div className="col-6 col-md-4">
          <FormSignUPIN user={props.user}></FormSignUPIN>
        </div>
      </div>
      <div className="row">
        <Message></Message>
      </div>
    </div>
  );
};

export default MainPage;
