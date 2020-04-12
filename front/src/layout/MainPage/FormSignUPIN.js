import React, { useRef } from "react";

const backurl = "http://localhost:3001";

const redirect = () => {
  window.location.href = `${backurl}/auth/google/`;
};

const FromSignUPIN = (props) => {
  console.log("FORMPROPS", props);

  const formRef = useRef();
  //  const geocoder = new google.maps.Geocoder();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const checkedFirstOption = form.Ineedtohelp.checked;
    console.log("USER TYPE FORM", checkedFirstOption);

    redirect(checkedFirstOption);
  };

  return (
    <div>
      <h1> ABOUT US </h1>
      <p>
        The HTML element represents a paragraph. Paragraphs are usually
        represented in visual media as blocks of text separated from adjacent
        blocks by blank lines and/or first-line indentation, but HTML paragraphs
        can be any structural grouping of related content, such as images or
        form fields.Aug
      </p>
      <br />
      {!props.user ? (
        <div>
          <h1>Join Us !</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="Ineedtohelp"
                value="Ineedtohelp"
                checked
              />
              <label className="form-check-label" for="Ineedtohelp">
                I need to help
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="Iwanttohelp"
                value="Iwanttohelp"
              />
              <label className="form-check-label" for="Iwanttohelp">
                I want to help
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login with Google
            </button>
          </form>
        </div>
      ) : (
        <div className="alert alert-warning" role="alert">
          Welcome {props.user.username}
        </div>
      )}
      {/* <a className="nav-link" href={`http://localhost:3001/auth/google`}>
      Login with Google
    </a>*/}
    </div>
  );
};

export default FromSignUPIN;
