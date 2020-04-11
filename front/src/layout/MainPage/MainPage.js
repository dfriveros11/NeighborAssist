import React from "react";
import GoogleMap from "./../GoogleMap";
import FormSignUPIN from "./FormSignUPIN.js";

const MainPage = (props) => {
  console.log("MAINPAGEUSER", props.user);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <GoogleMap></GoogleMap>
        </div>
        <div className="col-6 col-md-4">
          <FormSignUPIN user={props.user}></FormSignUPIN>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
