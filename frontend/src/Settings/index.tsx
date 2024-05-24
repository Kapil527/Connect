import { useParams } from "react-router-dom";

import ProfileDetails from "../Profile";
import Messages from "../Messages";
import Billing from "../Billing";
import { NavigateCard } from "./NavigateCard";
// import { Tabs } from "./Tabs";

const Setting = () => {
  const { slug } = useParams();
  let element;
  if (slug === "profile") element = <ProfileDetails />;
  if (slug === "billings") element = <Billing />;
  if (slug === "messages") element = <Messages />;
  // if(location.pathname === "/dashboard") element=<Dashboard />


  return (
    <>
      <div className="bg-sky-800 bg-opacity-5 w-full md:h-full md:flex">
        {/* <Tabs /> */}
        <NavigateCard />
        {element}
      </div>
    </>
  );
};

export default Setting;
