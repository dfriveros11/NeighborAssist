import React, { useRef } from "react";

const backurl = "http://localhost:3001";

const redirect = () => {
  window.location.href = `${backurl}/auth/google/`;
};

const FromSignUPIN = (props) => {
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
      <div className="card" id="loginCard">
        <h2 className="card-header text-center">Join us</h2>
        <div className="card-body">
          {!props.user ? (
            <div>
              <form ref={formRef} onSubmit={handleSubmit} id="loginForm">
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
                    I need help
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="loginButton"
                >
                  Login with Google
                </button>
              </form>
            </div>
          ) : (
            <h3 id="Welcome">Welcome {props.user.username}!</h3>
          )}
        </div>
      </div>
      {/* <a className="nav-link" href={`http://localhost:3001/auth/google`}>
      Login with Google
    </a>*/}
    </div>
  );
};

export default FromSignUPIN;
