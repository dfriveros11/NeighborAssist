import React from "react";
import GoogleMap from "./../GoogleMap.js";
import FormCreateAFavor from "./FormCreateAFavor.js";

const AskForAFavor = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <FormCreateAFavor></FormCreateAFavor>
      </div>
      <div className="col-6 col-md-4">
        <GoogleMap></GoogleMap>
      </div>
    </div>
  </div>
);

export default AskForAFavor;
