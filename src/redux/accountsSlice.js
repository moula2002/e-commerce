import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    lists: ["Your Orders", "Your Wish List", "Your Prime", "Your Account"],
  },
  reducers: {
    addList: (state, action) => {
      state.lists.push(action.payload);
    },
    removeList: (state, action) => {
      state.lists = state.lists.filter((item) => item !== action.payload);
    },
  },
});

export const { addList, removeList } = accountsSlice.actions;
export default accountsSlice.reducer;
   