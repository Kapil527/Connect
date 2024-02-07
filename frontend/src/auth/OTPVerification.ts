// import { useState } from "react";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "../firebaseConfig";

//send opt to the entered number
// const [user, setUser] = useState<ConfirmationResult | null>(null);
let user: ConfirmationResult | null;

export const sendOtp = async (phoneNumber: string, onNext: () => void) => {
  const phoneNumberRegexIndianCode = /^\+91[789]\d{9}$/;

  try {
    if (!phoneNumber) {
      toast.error("Please enter phoneNumber");
      return;
    }

    const pNum = `+91${phoneNumber}`;
    if (!phoneNumberRegexIndianCode.test(pNum)) {
      toast.error("Please enter correct number");
      return;
    }

    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    const confirmation: ConfirmationResult = await signInWithPhoneNumber(
      auth,
      pNum,
      recaptcha
    );
    //   setUser(confirmation);
    user = confirmation;
    onNext();
  } catch (error) {
    console.log(error);
  }
};

//This function veritfies the opt entered by user
export const verifyOtp = async (otp: string, onNext: () => void) => {
  try {
    if (otp) {
      (await user?.confirm(otp)) //checking weather correct opt is entered or not
        ? onNext()
        : toast.error("Please enter correct OTP");
    } else {
      toast.error("Enter OTP");
    }
  } catch (error) {
    console.log(error);
  }
};
