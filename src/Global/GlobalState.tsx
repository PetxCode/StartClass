import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { addUser } = GlobalState.actions;

export default GlobalState.reducer;
