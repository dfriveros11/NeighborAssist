import React from "react";
import GoogleMapReact from "google-map-react";
import mark from "./batman.svg";
import PropTypes from "prop-types";

const Marker = ({ children }) => children;
const GoogleMaps2 = (props) => {
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
        bootstrapURLKeys={{ key: "AIzaSyDcKxZAUxl8hHHciyI7yZLi8Yb4BDvRt2I" }}
        center={props.center}
        zoom={props.zoom}
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
