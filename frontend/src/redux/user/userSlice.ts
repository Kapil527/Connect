import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState, UserStateType } from "./userTypes.ts";

const BASE_URL = "http://localhost:8080/api/v1";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserData.fulfilled,
      (state, action: PayloadAction<UserStateType>) => {
        state = action.payload;
      }
    );
  },
});

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const authtoken = localStorage.getItem("authtoken");
    try {
      const response = await fetch(`${BASE_URL}/users/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${authtoken}`,
        },
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export default userSlice.reducer;
