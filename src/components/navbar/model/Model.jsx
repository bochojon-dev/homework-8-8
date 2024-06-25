import React from "react";
import "../model/Model.css";

const Model = ({ close, detailData }) => {
  console.log(Array.from(detailData?.data?.data));
  const newData = detailData?.data?.data;
  return (
    <>
      <div onClick={() => close(false)} className="overlay"></div>
      <div className="container">
        <div className="model">
          <button onClick={() => close(false)}>X</button>
          <h2>Model</h2>
          <div>
            <img width={300} src={newData.urls[0]} alt="" />
            <h3>{newData.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
