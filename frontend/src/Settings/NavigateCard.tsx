import { Link } from "react-router-dom";

import UserIcon from "/user-icon.png";
import BillingIcon from "/billing-icon.svg";
import MessageIcon from "/messageIcon.png";
import DashboardIcon from "/dashboardIcon.png";

const cardLinks = [
  {
    name: "Profile",
    path: "/profile",
    icon: UserIcon,
  },
  {
    name: "Billing",
    path: "/billings",
    icon: BillingIcon,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: MessageIcon,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
];

interface CardLinksType {
  name: string;
  path: string;
  icon: string;
}

export const CardList = ({ name, path, icon }: CardLinksType) => {
  return (
    <Link to={path} className={`profile ${divsStyle}`}>
      <div className="icon">
        <img src={icon} alt="user icon" className={`${iconStyle}`} />
      </div>
      <div className={`text ${textStyle}`}>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export const NavigateCard = () => {
  return (
    <>
      <div className="hidden md:inline-block containter h-1/2 my-8 mx-4 w-1/4">
        <div className="card shadow-xl rounded-xl bg-white p-4">
          {cardLinks.map(({ name, path, icon }) => (
            <CardList name={name} path={path} icon={icon} />
          ))}
        </div>
      </div>
    </>
  );
};

const iconStyle = "w-[25px] h-[25px]";
const divsStyle =
  "p-4 flex items-center hover:bg-gray-200 cursor-pointer hover:rounded-xl";
const textStyle = "mx-4";
