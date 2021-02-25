import React from "react";
import classes from "./AccountUsersHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const AccountUsersHeader = (props) => {
  return (
    <div
      className={`${classes.header} w-100 d-flex justify-content-between align-items-center`}
    >
      <div className={`w-60`}>
        <h2>Account Users</h2>
      </div>
      <div
        className={`${classes.searchbox} d-flex justify-content-between align-items-center flex-row
 w-50`}
      >
        <div className={`${classes.searchContainer} position-relative w-40`}>
          {" "}
          <input
            className={`${classes.searchInput} w-100 h-100`}
            type="text"
            placeholder="Search"
            value={props.searchValue}
            onChange={props.handleChange}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className={`${classes.searchIcon}`}
          />
        </div>
        <PrimaryButton
          onClick={() => console.log("Connect Pressed")}
          title={"Connect users"}
        />
      </div>
    </div>
  );
};

export default AccountUsersHeader;
