import React from "react";
import classes from "./UserListHeader.module.css";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const UserListHeader = (props) => {
  return (
    <div
      className={`d-flex justify-content-start align-items-center flex-row
   ${classes.actionBar}`}
    >
      <div className={classes.actionBarTitle}>
        <h3>{props.selectedNum} users selected </h3>
      </div>
      <SecondaryButton
        onClick={() => console.log("Edit Pressed")}
        icon={faPen}
        title={"Edit"}
      />
      <SecondaryButton
        onClick={props.onDeleteClick}
        icon={faTrashAlt}
        title={"Delete"}
      />
    </div>
  );
};

export default UserListHeader;
