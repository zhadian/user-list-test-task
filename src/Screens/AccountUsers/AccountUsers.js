import { React, useState, useEffect } from "react";
import classes from "./AccountUsers.module.css";
import AccountUsersHeader from "../../Components/AccountUsersHeader/AccountUsersHeader";
import UserList from "../../Components/UserList/UserList";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  updateUsers,
  deleteUser,
  deleteSelectedUsers,
} from "../../store/actions/usersAction";

const AccountUsers = () => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onCheckBoxClickHandler = (user) => {
    const existence = selectedUsers.filter((item) => item.id === user.id)
      .length;
    if (existence > 0) {
      setSelectedUsers((selectedUsers) =>
        selectedUsers.filter((item) => item.id !== user.id)
      );
    } else {
      setSelectedUsers((selectedUsers) => [...selectedUsers, user]);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(updateUsers(event.target.value));
  };

  const onAllCheckBoxClick = () => {
    setIsAllSelected(!isAllSelected);
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers);
    }
  };
  const onRowDeleteClick = (user) => {
    dispatch(deleteUser(user));
    const updatedSelected = selectedUsers.filter((item) => item.id !== user.id);
    setSelectedUsers(updatedSelected);
  };
  const onDeleteClick = () => {
    if (selectedUsers.length > 0) {
      dispatch(deleteSelectedUsers(selectedUsers));
      setSelectedUsers([]);
    }
  };

  return (
    <div className={classes.container}>
      <AccountUsersHeader
        searchValue={searchTerm}
        handleChange={handleChange}
      />

      <UserList
        isAllSelected={isAllSelected}
        selectedNum={selectedUsers.length}
        selectedUsers={selectedUsers}
        onCheckBoxClick={onCheckBoxClickHandler}
        onAllCheckBoxClick={onAllCheckBoxClick}
        onRowDeleteClick={onRowDeleteClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

export default AccountUsers;
