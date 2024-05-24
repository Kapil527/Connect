import { useLocation, Link } from "react-router-dom";

import { ProfilePic } from "./ProfilePic";

const cardLinks = [
  {
    name: "Profile",
    path: "/settings/profile",
  },
  {
    name: "Billing",
    path: "/settings/billings",
  },
  {
    name: "Appointments",
    path: "/settings/appointments",
  },
  {
    name: "Prescription",
    path: "/settings/prescription",
  },
  { name: "Radiology", path: "/settings/radiology" },
  {
    name: "Test Reports",
    path: "/settings/test-reports",
  },
  {
    name: "Dashboard",
    path: "/settings/dashboard",
  },
];

interface CardLinksType {
  name: string;
  path: string;
}

export const CardList = ({ name, path }: CardLinksType) => {
  const location = useLocation();
  return (
    <Link
      to={path}
      className={`profile ${divsStyle} ${
        location.pathname === path ? "bg-gray-100 rounded" : ""
      }`}
    >
      <div className={`text ${textStyle}`}>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export const NavigateCard = () => {
  return (
    <>
      <div className="hidden md:block h-full w-1/4">
        <div className="sidebar bg-white p-4">
          <ProfilePic />
          {cardLinks.map(({ name, path }) => (
            <CardList name={name} path={path} />
          ))}
        </div>
      </div>
    </>
  );
};

const divsStyle = `py-4 flex items-center hover:bg-gray-100 cursor-pointer hover:rounded-sm`;
const textStyle = "mx-4";
