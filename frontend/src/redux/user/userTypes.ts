export interface UserStateType {
  username: string;
  phoneNumber: string;
  dob: string;
  password: string;
  authtoken: string;
  image: string;
  role: string;
  success?: boolean
}

export const initialState: UserStateType = {
  username: "",
  phoneNumber: "",
  dob: "",
  password: "",
  authtoken: "",
  image: "",
  role: "",
};
