import React from "react";
import classes from "./PrimaryButton.module.css";

const PrimaryButton = (props) => {
  return (
    <div
      className={`paragragh d-flex justify-content-center align-items-center ${classes.container}`}
      onClick={props.onClick}
    >
      <p>{props.title}</p>
    </div>
  );
};

export default PrimaryButton;
