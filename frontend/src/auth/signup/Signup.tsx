import { useState, useReducer } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import Card from "../Card";
import PhoneNumber from "./PhoneNumber";
import OTPVerification from "./OptVerification";
import UserDetails from "./UserDetails";
import { intionalState, reducer } from "../Reducer";

export default function SignUP() {
  const navigate: NavigateFunction = useNavigate();

  const [step, setStep] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, intionalState);

  const onNext = () => {
    setStep((prev) => prev + 1);
  };

  const onPrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "phoneNumber":
        dispatch({ type: "phoneNumber", payload: event.target.value });
        break;
      case "otp":
        dispatch({ type: "otp", payload: event.target.value });
        break;
      case "username":
        dispatch({ type: "username", payload: event.target.value });
        break;
      case "password":
        dispatch({ type: "password", payload: event.target.value });
        break;
      case "cpassword":
        dispatch({ type: "cpassword", payload: event.target.value });
        break;
      default:
        return state;
    }
  };

  const handleRole = (value: string) => {
    dispatch({ type: "role", payload: value });
  };

  const handleonClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      console.log(state.role);

      const response = await axios.post(
        "http://localhost:5000/connect/auth/v1/signup",
        state
      );
      console.log(response.data);
      const { data } = await response.data;
      console.log(data);
      if (data.success === true) {
        localStorage.setItem("token", data.authtoken);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderPage = (): React.ReactNode => {
    switch (step) {
      case 1:
        return (
          <>
            <PhoneNumber
              handleChange={handleChange}
              phoneNumber={state.phoneNumber}
              onNext={onNext}
            />
          </>
        );
      case 2:
        return (
          <OTPVerification
            handleChange={handleChange}
            otp={state.otp}
            onNext={onNext}
          />
        );
      case 3:
        return (
          <UserDetails
            handleChange={handleChange}
            handleOnClick={handleonClick}
            handleRole={handleRole}
          />
        );
      default:
        setStep(3);
        break;
    }
  };

  return (
    <div className="container h-screen flex justify-evenly items-center bg-gradient-to-r from-blue-600 to-sky-500 w-100 h-100">
      <div className="right bg-white h-1/2 w-1/4 p-8 rounded-xl drop-shadow-xl">
        <div className="header flex items-center">
          {step > 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer"
              onClick={onPrev}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          )}
          <h1 className="text-center bg-gradient-to-r from-blue-600 to-sky-500 inline-block text-transparent bg-clip-text text-2xl font-medium w-full">
            SignUP
          </h1>
        </div>
        <div className="flex flex-col w-full h-3/4 justify-center my-4">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
