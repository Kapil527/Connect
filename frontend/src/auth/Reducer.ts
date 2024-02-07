type StateType = {
  phoneNumber: string;
  username: string;
  otp: string;
  password: string;
  cpassword: string;
  role: string;
};

export const intionalState: StateType = {
  username: "",
  phoneNumber: "",
  otp: "",
  password: "",
  cpassword: "",
  role: "",
};

export enum ActionTypes {
  USERNAME = "username",
  PASSWORD = "password",
  OTP = "otp",
  PHONENUMBER = "phoneNumber",
  CPASSWORD = "cpassword",
  ROLE = "role",
}

type ActionType =
  | { type: ActionTypes.USERNAME | "username"; payload: string }
  | { type: ActionTypes.PASSWORD | "phoneNumber"; payload: string }
  | { type: ActionTypes.OTP | "otp"; payload: string }
  | { type: ActionTypes.PASSWORD | "password"; payload: string }
  | { type: ActionTypes.CPASSWORD | "cpassword"; payload: string }
  | { type: ActionTypes.ROLE | "role"; payload: string };

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "otp":
      return { ...state, otp: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "cpassword":
      return { ...state, cpassword: action.payload };
    default:
      return state;
  }
};
