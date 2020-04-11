import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const FormCreateAFavor = (props) => {
  //  const [address, setAddress] = useState("");

  const formRef = useRef();
  //  const geocoder = new google.maps.Geocoder();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    console.log(form.date.value);
    const favor = {
      title: form.selectTitle.value,
      description: form.Description.value,
      date: new Date(form.date.value),
      lat: props.latitude,
      lon: props.longitude,
    };

    fetch("/newFavor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favor),
    });
  };

  // const geocode = () => {
  //   geocoder.geocode({ address: address }, function (results, status) {
  //     if (status === "OK") {
  //       console.log(results[0].geometry.location);
  //     } else {
  //       alert("Geocode was not successful for the following reason: " + status);
  //     }
  //   });
  // };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="Title">Title</label>
        <select className="form-control" id="selectTitle">
          <option>Take the dog on a walk</option>
          <option>Grocery run</option>
          <option>Pharmacy run</option>
          <option>Pay bill</option>
        </select>
      </div>
      <div className="form-group">
        <label for="Description">Description</label>
        <textarea
          className="form-control"
          id="Description"
          rows="3"
          required
          placeholder="Write a brief description"
        ></textarea>
      </div>
      <div className="form-group">
        <label for="date">Date of favor:</label>
        <br />
        <input type="date" id="date" name="date" />
      </div>
      <div className="form-group">
        <label for="Address">Address</label>
        <input
          type="text"
          className="form-control"
          id="Address"
          placeholder="Type your address here"
        />
        <button type="button" className="btn btn-info" id="geocodeButton">
          Enter Address
        </button>
      </div>
      <div className="form-group">
        <label for="locationButton"> or click here to get your location</label>
        <br />
        <button
          type="button"
          onClick={props.setLatLon}
          className="btn btn-info"
          id="locationButton"
        >
          Get my location
        </button>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit my favor
      </button>
    </form>
  );
};

FormCreateAFavor.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  setLatLon: PropTypes.func,
};

export default FormCreateAFavor;
