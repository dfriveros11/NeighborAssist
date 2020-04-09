import React from "react";

const FormCreateAFavor = () => (
  <form>
    <div className="form-group">
      <label for="Title">Title</label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className="form-group">
      <label for="Description">Description</label>
      <textarea className="form-control" id="Description" rows="3"></textarea>
    </div>
    <div className="form-group">
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday" />
    </div>
    <div className="form-group">
      <label for="Date">Address</label>
      <input type="text" className="form-control" id="Date" />
    </div>
    <div className="form-group">
      <label for="Date">Location</label>
      <input type="text" className="form-control" id="Date" />
    </div>

    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default FormCreateAFavor;
