import React from "react";
import GoogleMapReact from "google-map-react";
import mark from "../AskForAFavor/batman.svg";
import PropTypes from "prop-types";

const Marker = ({ children }) => children;
const GoogleMap = (props) => {
  //const [zoom, setZoom] = useState(11);
  //  const [bounds, setBounds] = useState(null);
  let code = null;

  if (props.favors) {
    // const centerLat = props.favors[0].lat;
    // const centerLon = props.favors[0].lon;
    // const center = [ centerLat,centerLon ];

    code = props.favors.map((favor) => {
      return (
        <Marker key={favor._id} lat={favor.lat} lng={favor.lon} id="marker">
          <img src={mark} alt="you're here" height="40px" width="40px" />
        </Marker>
      );
    });
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDcKxZAUxl8hHHciyI7yZLi8Yb4BDvRt2I" }}
          center={{ lat: 4.711, lng: -74.0721 }}
          zoom={11}
        >
          {code}
        </GoogleMapReact>
      </div>
    );
  }
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDcKxZAUxl8hHHciyI7yZLi8Yb4BDvRt2I" }}
      defaultCenter={{ lat: 4.711, lng: -74.0721 }}
      defaultZoom={10}
    ></GoogleMapReact>
  );
};

GoogleMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default GoogleMap;
