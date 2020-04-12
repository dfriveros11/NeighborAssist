import React from "react";
import GoogleMapReact from "google-map-react";
import mark from "./AskForAFavor/batman.svg";
import PropTypes from "prop-types";

const Marker = ({ children }) => children;
const GoogleMap = (props) => {
  //  const mapRef = useRef();
  //  const [zoom, setZoom] = useState(11);
  //  const [bounds, setBounds] = useState(null);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: 4.711, lng: -74.0721 }}
        defaultZoom={11}
      >
        <Marker lat={props.latitude} lng={props.longitude}>
          <img src={mark} alt="you're here" height="50px" width="50px" />
        </Marker>
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default GoogleMap;
