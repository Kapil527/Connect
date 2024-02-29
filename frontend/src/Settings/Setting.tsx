import { NavigateCard } from "./NavigateCard";
import ProfileDetails from "../Profile";
import { Tabs } from "./Tabs";

const Setting = () => {
  return (
    <>
      <div className="bg-sky-800 bg-opacity-5 w-full md:w-full md:flex">
        <Tabs />
        <NavigateCard />
        <ProfileDetails />
      </div>
    </>
  );
};

export default Setting;
