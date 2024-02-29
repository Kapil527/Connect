import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


//This are all links that the user can navigate.
const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: "",
  },
  {
    name: "Appointment",
    path: "/appointment",
    icon: "",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "",
  },
  {
    name: "Blog",
    path: "/blog",
    icon: "",
  },
  {
    name: "Setting",
    path: "/profile",
    icon: "",
  },
  {
    name: "Logout",
    path: "/login",
    icon: "",
  },
];

type NavLinksType = {
  name: string;
  path: string;
  icon: string;
};

// this component renders the name , path and icon in the sidebar.
const NavLinks = ({ name, path, icon }: NavLinksType) => {
  return (
    <li className="flex items-center p-4 w-full">
      <Link to={path}>
        <p className="mx-2">{icon}</p>
        <p>{name}</p>
      </Link>
    </li>
  );
};



export const Sidebar = () => {
  // useState for visibility of the sliding nav bar
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsCollapsed((prev: boolean) => !prev);
  };

  return (
    <>
      <div className="container w-full h-full z-10">
        <div className=" w-full p-4 flex justify-between items-center shadow-sm fixed top-0 z-10 bg-white">
          <IconComponent icon={three_bar_svg} handleOnClick={handleToggle} />
          <h3 className="text-2xl font-bold" onClick={() => navigate("/")}>
            Connect
          </h3>
          <IconComponent icon={user_icon} handleOnClick={() => {navigate("/profile")}}/>
        </div>
        <div
          className={`${
            isCollapsed ? "-left-3/4" : "left-0"
          } ease-in-out duration-200 delay-150 p-4 h-full w-3/4 bg-white shadow-lg fixed top-0 z-10`}
        >
          <div className="upperSection h-1/6 border-b-2">
            <div className="h-full w-full info flex flex-col justify-end p-4">
              <img
                src="/user-icon.png"
                alt="user-icon"
                className="w-[50px] h-[50px]"
              />
              <h4 className="text-lg font-bold">Baradi Kapil</h4>
            </div>
            <button className={`fixed top-4  ${isCollapsed ? "-left-3/4": "left-2/3"} ease-in-out duration-200 delay-150 pr-4`} onClick={handleToggle}>
              {close_icon}
            </button>
          </div>
          <div className="links">
            <ul onClick={handleToggle}>
              {navLinks.map((link, key) => (
                <NavLinks
                  name={link.name}
                  path={link.path}
                  icon={link.icon}
                  key={key}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Component for icon
const IconComponent = ({
  icon,
  handleOnClick,
}: {
  icon: JSX.Element;
  handleOnClick?: () => void;
}) => {
  return (
    <button className="lg:hidden bg-white w-fit" onClick={handleOnClick}>
      {icon}
    </button>
  );
};

const three_bar_svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const user_icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const close_icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
