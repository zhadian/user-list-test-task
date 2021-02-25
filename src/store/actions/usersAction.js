import * as actionType from "./actionTypes";
import axios from "axios";

export const seUsers = (data) => {
  return {
    type: actionType.SET_USERS,
    data: data,
  };
};
export const updateUsers = (searchTerm) => {
  return {
    type: actionType.UPDATE_USERS,
    searchTerm: searchTerm,
  };
};
export const deleteUser = (user) => {
  return {
    type: actionType.DELETE_USER,
    user: user,
  };
};
export const deleteSelectedUsers = (selectedUsers) => {
  return {
    type: actionType.DELETE_SELECTED_USER,
    selectedUsers: selectedUsers,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json",
    })
      .then((response) => {
        dispatch(seUsers(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
