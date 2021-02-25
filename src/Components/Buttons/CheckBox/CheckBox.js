import React from "react";
import classes from "./CheckBox.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckBox = (props) => {
  return (
    <div
      className={`${classes.container} h-100 d-flex justify-content-center align-items-center`}
    >
      <div
        onClick={props.onClick}
        style={{ display: props.isSelected ? "none" : "block" }}
        className={`${classes.inActiveBox}`}
      ></div>
      <div
        onClick={props.onClick}
        style={{ display: props.isSelected ? "flex" : "none" }}
        className={`${classes.activeBox} justify-content-center align-items-center`}
      >
        <FontAwesomeIcon className={classes.check} icon={faCheck} />
      </div>
    </div>
  );
};

export default CheckBox;
