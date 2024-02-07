import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  phoneNumber: string;
  username: string;
  otp: string;
  password: string;
  cpassword: string;
  message: string | null;
  success: boolean | null;
};

export const initialState: StateType = {
  username: "",
  phoneNumber: "",
  otp: "",
  password: "",
  cpassword: "",
  message: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<StateType>) {
      const { phoneNumber, password } = action.payload;
      state.phoneNumber = phoneNumber;
      state.password = password;

      if (state.phoneNumber === "123456879" && state.password === "123456") {
        state.success = true;
        state.message = "Success";
      }
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
