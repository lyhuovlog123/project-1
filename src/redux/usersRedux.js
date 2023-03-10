import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
      // GET USERS
      getUsersSuccess: (state, action) => {
        state.isFetching = false;
        state.users = action.payload;
      },
      getUsersFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      //UPDATE
      updateUserSuccess: (state, action) => {
        state.isFetching = false;
        state.products[
          state.users.findIndex((item) => item._id === action.payload.id)
        ] = action.payload.user;
      },
      updateUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      //DELETE
      deleteUserSuccess: (state, action) => {
        state.isFetching = false;
        state.users.splice(
          state.users.findIndex((item) => item._id === action.payload),
          1
        );
      },
      deleteUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      // ADD
      addUserSuccess: (state, action) => {
        state.isFetching = false;
        state.users.push(action.payload);
      },
      addUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
  },
});

export const { getUsersSuccess, getUsersFailure, deleteUserSuccess, deleteUserFailure, addUserSuccess, addUserFailure, updateUserFailure, updateUserSuccess } = usersSlice.actions;
export default usersSlice.reducer;
