import React from "react";
import classes from "./SecondaryButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondaryButton = (props) => {
  return (
    <div
      className={`${classes.container} lightText d-flex justify-content-between align-items-center`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={`${classes.icon} lightText`}
      />
      <p>{props.title}</p>
    </div>
  );
};

export default SecondaryButton;
