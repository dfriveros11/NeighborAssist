import React from "react";
/*import MyFavorHelper from "./MyFavorHelper.js";
import MyFavorHelpee from "./MyFavorHelpee.js";*/

const FavorList = (props) => {
  //  const [codeLines, setCodeLines] = useState(null);

  let code = null;
  if (props.favors) {
    code = props.favors.map((favor) => {
      const date = new Date(favor.date);

      return (
        <button
          key={favor._id}
          className="list-group-item list-group-item-action flex-column align-items-start "
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{favor.title}</h5>
            <small>{date.toDateString()}</small>
          </div>
          <div>
            <p className="mb-1">{favor.description}</p>
          </div>
          <div className="text-right">
            <button
              className="btn btn-outline-success btn-sm helpPersonButton"
              onClick={props.handleClick}
            >
              Help this person
            </button>
          </div>
        </button>
      );
    });
    return <div className="list-group">{code}</div>;
  }
  return (
    <div className="d-flex align-items-center">
      <h3>Loading favors...</h3>
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default FavorList;
