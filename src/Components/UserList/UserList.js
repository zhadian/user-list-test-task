import React from "react";
import { useSelector } from "react-redux";
import classes from "./UserList.module.css";
import UserListHeader from "../UserListHeader/UserListHeader";
import UserRow from "../UserRow/UserRow";
import { List, AutoSizer } from "react-virtualized";
import ClipLoader from "react-spinners/ClipLoader";
import UserListTitle from "../UserListTitle/UserListTitle";

const UserList = (props) => {
  const filteredUsers = useSelector((state) => state.users.filteredUsers);

  const renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <UserRow
          usersData={filteredUsers[index]}
          onCheckBoxClick={props.onCheckBoxClick}
          selectedUsers={props.selectedUsers}
          onRowDeleteClick={props.onRowDeleteClick}
        />
      </div>
    );
  };
  let height = +window.innerHeight - 130;

  return (
    <div style={{ height: height }} className={classes.contianer}>
      <UserListHeader
        onDeleteClick={props.onDeleteClick}
        selectedNum={props.selectedNum}
      />
      <UserListTitle
        isAllSelected={props.isAllSelected}
        onAllCheckBoxClick={props.onAllCheckBoxClick}
      />
      {filteredUsers ? (
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                style={{ outline: "none" }}
                width={width}
                height={height}
                rowHeight={70}
                rowRenderer={renderRow}
                rowCount={filteredUsers.length}
                overscanRowCount={3}
              />
            );
          }}
        </AutoSizer>
      ) : (
        <div
          className={`sweet-loading ${classes.loadingContainer} d-flex w-100 justify-content-center align-items-center`}
        >
          <ClipLoader size={80} color={"#123abc"} loading={!filteredUsers} />
        </div>
      )}
    </div>
  );
};

export default UserList;
