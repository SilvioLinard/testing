import React from "react";
import "./style.css";

const GrayImg = (props) => {
  const grayClass = props.gray ? "gray-img" : "";

  return (
    <img
      className={grayClass}
      src={props.img_Url}
      alt="Planets"
      width="300"
    />
  );
};

export default GrayImg;
