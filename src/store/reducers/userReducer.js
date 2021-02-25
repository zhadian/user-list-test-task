import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: null,
  filteredUsers: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.data.users,
        filteredUsers: action.data.users,
      };
    case actionTypes.UPDATE_USERS:
      return {
        ...state,
        filteredUsers: state.users.filter((user) =>
          user.name.toLowerCase().includes(action.searchTerm)
        ),
      };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        filteredUsers: state.filteredUsers.filter(
          (item) => item.id !== action.user.id
        ),
      };
    case actionTypes.DELETE_SELECTED_USER:
      return {
        ...state,
        filteredUsers: state.filteredUsers.filter(
          (x) => !action.selectedUsers.filter((y) => y.id === x.id).length
        ),
      };
    default:
      return state;
  }
};

export default reducer;
