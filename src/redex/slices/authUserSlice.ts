import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/nav";

const initialState: Partial<User> = {};
const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    addAuthUser(state, action: PayloadAction<User>) {
      //console.log("action", action.payload);

      return (state = action.payload);
    },
  },
});

export const { addAuthUser } = authUserSlice.actions;
export default authUserSlice.reducer;
