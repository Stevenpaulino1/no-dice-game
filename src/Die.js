import React from "react";
import "./Die.css";
const die = props => {
  return (
    <i
      className={`Die fas fa-dice-${props.num} ${
        props.jiggling ? "jiggling" : ""
      }`}
    />
  );
};

export default die;
