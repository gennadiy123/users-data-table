import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((el) => {
        if (el.id === action.payload.id) {
          return Object.assign(el, {
            name: action.payload.name,
            age: action.payload.age,
            "about-person": action.payload["about-person"],
          });
        }
        return el;
      });
    },
      deleteUser: (state, action) => {
     state.users = state.users.filter((el) => el.id !== action.payload);
    },
  },
});

export const { getUsers, addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
