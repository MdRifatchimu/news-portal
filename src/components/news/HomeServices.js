import React from "react";
import "./HomeServices.css";
const HomeServices = props => {
  // used destructuring
  const {urlToImage, title, description} = props.service || {};
  return (
    <div class="col">
      <div class="card h-100">
        <img src={urlToImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
