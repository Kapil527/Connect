import { BasicInfo } from "./BasicInfo";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { ProfilePic } from "./ProfilePic";

const ProfileDetails = () => {
  return (
    <div className="content w-3/4 px-4 flex flex-col">
      <ProfilePic />
      <BasicInfo />
      <ChangePassword />
      <DeleteAccount />
    </div>
  );
};

export default ProfileDetails;
