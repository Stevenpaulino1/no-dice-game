import React from "react";
import "./Die.css";
const die = props => {
  return <i className={"Die fas fa-dice-" + props.num} />;
};

export default die;
