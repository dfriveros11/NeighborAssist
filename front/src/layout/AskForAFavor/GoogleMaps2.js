import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import mark from "./batman.svg";
import PropTypes from "prop-types";

const Marker = ({ children }) => children;
const GoogleMaps2 = (props) => {
  //  const mapRef = useRef();
  //const [zoom, setZoom] = useState(11);
  //const [center, setCenter] = useState([]);
  //  const [bounds, setBounds] = useState(null);
  //const handleChange = () => {
  //  setZoom(15);
  //  setCenter({ lat: props.latitude, lng: props.longitude });
  //};
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCDwsd4IPgNS13CJNrJZDxP__0lc7UzV8k" }}
        defaultCenter={{ lat: 4.711, lng: -74.0721 }}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={props.latitude} lng={props.longitude}>
          <img src={mark} alt="you're here" height="50px" width="50px" />
        </Marker>
      </GoogleMapReact>
    </div>
  );
};

GoogleMaps2.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default GoogleMaps2;
