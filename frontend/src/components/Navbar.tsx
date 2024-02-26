import { Link, useNavigate } from "react-router-dom";

import Logo from "/logo1.webp";
import { checkLoginStatus } from "./CheckLoginStatus";

const Navbar = () => {
  const navigate = useNavigate();
  const checkStatus = checkLoginStatus();

  const handleOnClick = () => {
    if (!checkStatus) {
      navigate("/login");
    }
  };
  return (
    <>
      <nav className="p-4 w-full sticky top-0 flex bg-white shadow-sm z-10">
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
                onClick={() => navigate("/profile")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const buttonStyles =
  "py-1.5 px-4 rounded bg-sky-800 text-white mr-4 hover:bg-white hover:text-sky-800 border border-black/50";
