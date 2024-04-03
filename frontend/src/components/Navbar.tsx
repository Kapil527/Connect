import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "/logo1.webp";
import { checkLoginStatus } from "./CheckLoginStatus";

const Navbar = () => {
  const navigate = useNavigate();
  const checkStatus = checkLoginStatus();

  const [dropDown, setDropDown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropDown((prev) => !prev);
  };

  const handleOnClick = () => {
    if (!checkStatus) {
      navigate("/login");
    }
  };
  return (
    <>
      <nav className="flex flex-wrap p-4 w-full sticky top-0 bg-white shadow-sm z-10">
        <div className="left w-1/2 flex flex-row items-center justify-evenly">
          <div className="icon w-1/5">
            <Link to="/">
              <img className="w-8 cursor-pointer" src={Logo} />
            </Link>
          </div>
          <div className="sections w-4/5">
            <ul className="flex flex-row justify-evenly">
              <Link to="/" className="cursor-pointer">
                <li>Home</li>
              </Link>
              <Link
                to="/appointments"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                <li>Appointments</li>
              </Link>
              <Link
                to="/dashboard"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                <li>DashBoard</li>
              </Link>
              <Link to="/blogs" className="cursor-pointer">
                <li>Blogs</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 flex items-center">
          <div className="searchBar flex-1">
            <div className="w-2/3 flex justify-end items-center">
              <input
                placeholder="Search"
                className="border border-gray-400 p-1 w-full outline-none border-r-0"
              />
              <button className="border border-gray-400 p-2 border-l-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="userImage flex-4 mr-4 cursor-pointer">
            {checkStatus === false ? (
              <div>
                <button
                  className={`${buttonStyles}`}
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className={`${buttonStyles}`}
                  onClick={() => navigate("/signup")}
                >
                  SignUp
                </button>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
                onClick={toggleDropdown}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>
          <div
            className={`drop-down bg-white fixed ${
              dropDown ? "" : "hidden"
            } top-12 right-2 p-4`}
          >
            <Link
              className="p-2 flex items-center hover:bg-gray-200 hover:rounded cursor-pointer"
              to="/settings/profile"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>Settings</p>
            </Link>
            <Link
              className="p-2 flex items-center hover:bg-gray-200 hover:rounded cursor-pointer"
              onClick={() => {
                localStorage.removeItem("authtoken");
                toggleDropdown();
              }}
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const buttonStyles =
  "py-1.5 px-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50";
