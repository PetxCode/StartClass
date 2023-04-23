import { createSlice } from "@reduxjs/toolkit";
interface iData {
  token?: string;
  refresh?: string;
  user?: {};
}
const initialState = {
  user: {} as iData | null,
  createUserData: {} as iData | null,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    createUser: (state, { payload }) => {
      state.createUserData = payload;
    },
    deleteUser: (state, { payload }) => {
      state.createUserData = null;
    },

    logOutUser: (state) => {
      state.user = null;
    },

    updateToken: (state, { payload }: any) => {
      state.user!.token = payload;
    },
  },
});

export const { addUser, updateToken, logOutUser, createUser, deleteUser } =
  GlobalState.actions;

export default GlobalState.reducer;
