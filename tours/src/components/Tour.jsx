import React from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  return (
    <article className="single-tour">
      <img src={image} className="img" alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
}

export default Tour;
