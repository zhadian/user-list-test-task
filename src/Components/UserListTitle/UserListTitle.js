import React from "react";
import classes from "./UserListTitle.module.css";
import CheckBox from "../Buttons/CheckBox/CheckBox";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserListTitle = (props) => {
  return (
    <div
      className={`${classes.container} w-100 d-flex justify-contetn-between align-items-center flex-row`}
    >
      <CheckBox
        isSelected={props.isAllSelected}
        onClick={() => props.onAllCheckBoxClick()}
      />
      <div
        className={`${classes.userBoxContaienr} lightText h-100 d-flex justify-content-between align-items-center flex-row`}
      >
        user
      </div>
      <div
        className={`${classes.roleBox} lightText h-100 d-flex justify-content-center align-items-center`}
      >
        permition
        <FontAwesomeIcon
          className={`lightText paragragh ${classes.icon}`}
          icon={faArrowDown}
        />
      </div>
    </div>
  );
};

export default UserListTitle;
