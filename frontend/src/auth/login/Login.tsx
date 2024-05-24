import { useReducer } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { intionalState, reducer, ActionTypes } from "../Reducer";

export default function Login() {
  const [state, dispatch] = useReducer(reducer, intionalState);
  const navigate = useNavigate();

  //handles login functionality
  const handleonClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (!state.phoneNumber || !state.password) {
      toast.error("Please enter all the details");
    }

    const loginData = {
      phoneNumber: `+91${state.phoneNumber}`,
      password: state.password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("authtoken", data.authtoken);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container h-screen flex flex-wrap justify-evenly items-center w-full">
        <div className="right bg-white h-1/2 w-1/4 p-8 rounded-xl drop-shadow-2xl">
          <div className="header flex justify-center">
            <h1 className="text-center text-sky-800 text-2xl font-medium">
              Login
            </h1>
          </div>
          <form className="flex flex-col w-full h-3/4 justify-center my-4">
            <div className="inputs flex flex-col justify-center w-full">
              <input
                type="text"
                placeholder="PhoneNumber"
                value={state.phoneNumber}
                className="p-1 rounded my-2 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
                onChange={(event) =>
                  dispatch({
                    type: ActionTypes.PHONENUMBER,
                    payload: event.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={state.password}
                className="p-1 rounded my-2 text-gray-500 placeholder:text-gray-300 border-b-2 outline-none"
                onChange={(event) =>
                  dispatch({
                    type: ActionTypes.PASSWORD,
                    payload: event.target.value,
                  })
                }
              />
            </div>
            <div className="forgetSection flex justify-between my-4">
              <div>
                <button>
                  <small className="text-sky-800">ForgetPassword?</small>
                </button>
              </div>
              <div>
                <Link to="/signup">
                  <small className="text-sky-800">SignUp</small>
                </Link>
              </div>
            </div>
            <button
              className="py-1.5 px-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50"
              onClick={handleonClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
