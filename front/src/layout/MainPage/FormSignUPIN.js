import React from "react";

const backurl = "http://localhost:3001";

const redirect = () => {
  window.location.href = `${backurl}/auth/google`;
};

const FromSignUPIN = (props) => {
  console.log("FORMPROPS", props);

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
          <button type="button" className="btn btn-primary" onClick={redirect}>
            Login with Google
          </button>
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
