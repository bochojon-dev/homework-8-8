import React from "react";
import "../model/Model.css";

const Model = ({ close, data }) => {
  console.log(data?.data?.products);
  return (
    <>
      <div onClick={() => close(false)} className="overlay"></div>
      <div className="container">
        <div className="model">
          <button onClick={() => close(false)}>X</button>
          <h2>Model</h2>
        </div>
      </div>
    </>
  );
};

export default Model;
