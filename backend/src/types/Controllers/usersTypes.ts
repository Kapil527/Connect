export interface LoginRequestBody {
  phoneNumber: string,
  password: string
}

export interface NewUserRequestBody extends LoginRequestBody {
  username: string;
  image?: string;
  role: "paitent" | "doctor";
}

