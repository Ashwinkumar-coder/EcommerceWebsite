import React from "react";

const Slider = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={require("./cloth.jpg")}
            alt="Card"
            height={100}
          />
          <div className="card-img-overlay d-flex align-items-center">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;