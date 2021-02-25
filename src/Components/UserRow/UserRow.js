import React from "react";
import classes from "./UserRow.module.css";
import CheckBox from "../Buttons/CheckBox/CheckBox";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const UserRow = (props) => {
  const handleColorType = (role) => {
    switch (role) {
      case "ACCOUNT_MANAGER":
        return { background: "#FEDDE6", color: "#922B6C" };
      case "AGENT":
        return { background: "#C8E7F9", color: "#2C5282" };
      case "ADMIN":
        return { background: "#EFE2FE", color: "#574195" };
      case "EXTERNAL_REVIEWER":
        return { background: "#FEEBC8", color: "#91472C" };
      default:
        return "#fff";
    }
  };

  const handleRoleText = (role) => {
    switch (role) {
      case "ACCOUNT_MANAGER":
        return "Account manager";
      case "AGENT":
        return "Agent";
      case "ADMIN":
        return "Admin";
      case "EXTERNAL_REVIEWER":
        return "External reviewer";
      default:
        return "Geust";
    }
  };
  const isSelectedCheck = (user) => {
    if (props.selectedUsers.filter((item) => item.id === user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    props.usersData && (
      <div
        style={{
          background: isSelectedCheck(props.usersData) ? "#F7FAFC" : "white",
        }}
        className={`${classes.container} position-relative w-100 d-flex justify-contetn-between align-items-center flex-row`}
      >
        <div
          style={{
            display: isSelectedCheck(props.usersData) ? "block" : "none",
          }}
          className={`${classes.bar} position-absolute`}
        ></div>
        <CheckBox
          isSelected={isSelectedCheck(props.usersData)}
          onClick={() => props.onCheckBoxClick(props.usersData)}
        />
        <div
          className={`${classes.userBoxContaienr} h-100 d-flex justify-content-between align-items-center flex-row`}
        >
          <div className={`${classes.profileImg} `}>
            <img
              className={"w-100"}
              src={props.usersData.avatar}
              alt={props.usersData.name}
            />
          </div>
          <div
            className={`${classes.infoBox} h-100 d-flex justify-content-center align-items-start flex-column`}
          >
            <div className={`${classes.name}`}>
              <p>{props.usersData.name}</p>
            </div>
            <div className={`${classes.email} lightText`}>
              <p>{props.usersData.email}</p>
            </div>
          </div>
        </div>
        <div
          className={`${classes.roleBox} h-100 d-flex justify-content-center align-items-center`}
        >
          <div
            style={handleColorType(props.usersData.role)}
            className={`${classes.role} smallText d-flex justify-content-center align-items-center`}
          >
            {handleRoleText(props.usersData.role)}
          </div>
        </div>

        <div
          style={{
            display: isSelectedCheck(props.usersData) ? "flex" : "none",
          }}
          className={`${classes.actionButtons} justify-content-center align-items-center flex-row`}
        >
          <SecondaryButton
            onClick={props.onEditClick}
            icon={faPen}
            title={"Edit"}
          />
          <SecondaryButton
            onClick={() => props.onRowDeleteClick(props.usersData)}
            icon={faTrashAlt}
          />
        </div>
      </div>
    )
  );
};

export default UserRow;
