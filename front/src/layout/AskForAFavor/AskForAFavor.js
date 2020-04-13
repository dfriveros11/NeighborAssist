import React, { useState } from "react";
import GoogleMaps2 from "./GoogleMaps2.js";
import FormCreateAFavor from "./FormCreateAFavor.js";

const AskForAFavor = (props) => {
  const [latitude, setLatitude] = useState(4.711);
  const [longitude, setLongitude] = useState(-74.0721);
  const [zoom, setZoom] = useState(11);
  const [center, setCenter] = useState({ lat: latitude, lng: longitude });

  function success(pos) {
    var crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
    setZoom(15);
    setCenter({ lat: crd.latitude, lng: crd.longitude });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const setLatLon = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <div className="container">
      <h1>Ask for a favor</h1>
      <p>
        After clicking buttons please go to another tab or reload to see the
        changes
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="card" id="formCard">
            <div className="card-body">
              <FormCreateAFavor
                latitude={latitude}
                longitude={longitude}
                setLatLon={setLatLon}
                user={props.user}
              ></FormCreateAFavor>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6">
          <GoogleMaps2
            zoom={zoom}
            center={center}
            latitude={latitude}
            longitude={longitude}
          ></GoogleMaps2>
        </div>
      </div>
    </div>
  );
};

export default AskForAFavor;
