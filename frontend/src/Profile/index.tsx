import { BasicInfo } from "./BasicInfo";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";

const ProfileDetails = () => {
  return (
    <div className="content md:w-3/4 px-2 sm:px-4 flex flex-col">
      <BasicInfo />
      <ChangePassword />
      <DeleteAccount />
    </div>
  );
};

export default ProfileDetails;
