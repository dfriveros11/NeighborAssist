import React from "react";
/*import MyFavorHelper from "./MyFavorHelper.js";
import MyFavorHelpee from "./MyFavorHelpee.js";*/

const FavorList = (props) => {
  //  const [codeLines, setCodeLines] = useState(null);

  let code = null;
  if (props.favors) {
    if (props.favors.length === 0) {
      return (
        <div class="alert alert-danger" role="alert">
          There are no favors available at this moment.
        </div>
      );
    }
    
    /* Comentario Juan Felipe Torres: Aqui hacen un map pero no agregaron el key para cada elemento de la iteración, 
       sería algo como:
       props.favors.map((favor,i) => { // al elemento que se renderiza al iterar deben agregarle un key={"favor" + i} 
       */
    code = props.favors.map((favor) => {
      const date = new Date(favor.date);
      let classNameBut =
        "list-group-item list-group-item-action flex-column align-items-start ";

      let clicked;
      if (props.help) {
        classNameBut =
          "btn list-group-item list-group-item-action flex-column align-items-start ";
      } else {
        clicked = (evt) => props.handleClick(evt, favor);
      }

      return (
        <button key={favor._id} className={classNameBut} onClick={clicked}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{favor.title}</h5>
            <small>{date.toDateString()}</small>
          </div>
          <div>
            <p className="mb-1">{favor.description}</p>
          </div>
          {props.help ? (
            <div className="text-right">
              <button
                className="btn btn-outline-success btn-sm helpPersonButton"
                onClick={(evt) => props.handleClick(evt, favor)}
              >
                Help this person
              </button>
            </div>
          ) : (
            <div> </div>
          )}
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
