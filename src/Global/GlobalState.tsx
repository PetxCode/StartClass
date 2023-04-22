import { createSlice } from "@reduxjs/toolkit";
interface iData {
  token?: string;
  refresh?: string;
  user?: {};
}
const initialState = {
  user: {} as iData,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    updateToken: (state, { payload }) => {
      state.user.token = payload;
    },
  },
});

export const { addUser, updateToken } = GlobalState.actions;

export default GlobalState.reducer;
