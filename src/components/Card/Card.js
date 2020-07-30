import React from "react";
import "./Card.scss";

function card({ imageUrl, title, subtitle }) {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="card__info">
        <div className="card__textContainer">
          <h3 className="card__title">{title}</h3>
          <h5 className="card__subtitle">{subtitle}</h5>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.602"
          height="24.954"
          viewBox="0 0 25.602 24.954"
          className="card__arrow"
        >
          <path
            d="M10.886,4.319,12.154,3.05a1.366,1.366,0,0,1,1.937,0L25.2,14.153a1.366,1.366,0,0,1,0,1.937L14.091,27.2a1.366,1.366,0,0,1-1.937,0L10.886,25.93a1.373,1.373,0,0,1,.023-1.96l6.886-6.56H1.371A1.368,1.368,0,0,1,0,16.038V14.21a1.368,1.368,0,0,1,1.371-1.371H17.794l-6.886-6.56A1.363,1.363,0,0,1,10.886,4.319Z"
            transform="translate(0 -2.647)"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
}

export default card;
