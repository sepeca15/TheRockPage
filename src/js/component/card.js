import React from "react";

const Card = (props) => {
  return (
    <div className="card" >
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">
         {props.desc}
        </p>
        <a href={props.goTo} className="btn btn-primary">
          Ira {props.goTo}
        </a>
      </div>
    </div>
  );
};

export default Card;
