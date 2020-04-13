import React, { useRef } from "react";
import PropTypes from "prop-types";

const FormCreateAFavor = (props) => {
  const formRef = useRef();
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
      status: "Waiting",
      helpee: props.user._id,
    };

    fetch("/newFavor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favor),
    });
  };

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
        <label for="locationButton">
          Don't forget to click here to get your location
        </label>
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
