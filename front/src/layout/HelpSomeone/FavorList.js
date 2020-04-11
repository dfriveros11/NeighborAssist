import React, { useState } from "react";
/*import MyFavorHelper from "./MyFavorHelper.js";
import MyFavorHelpee from "./MyFavorHelpee.js";*/

const FavorList = (props) => {
  console.log("props", props.favors);
  //  const [codeLines, setCodeLines] = useState(null);
  let code = null;
  if (props.favors) {
    code = props.favors.map((favor) => {
      const date = new Date(favor.date);

      return (
        <a
          key={favor._id}
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start "
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{favor.title}</h5>
            <small>{date.toDateString()}</small>
          </div>
          <p className="mb-1">{favor.description}</p>
        </a>
      );
    });
    return <div className="list-group">{code}</div>;
  }
  return <h1>Loading</h1>;
};

export default FavorList;
