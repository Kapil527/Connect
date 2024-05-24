import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import UserProfilePic from "/profilePic.jpg";
import { fetchUserData } from "../redux/user/userSlice";

export const ProfilePic = () => {
  const selector = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch<AppDispatch>();

  dispatch(fetchUserData());
  console.log(selector);

  return (
    <>
      <div className="container h-1/6 w-full flex items-center p-2 my-2 bg-white border-b">
        <div className="image mx-4">
          <img
            src={UserProfilePic}
            alt="user profile pic"
            style={{ borderRadius: "50%", width: "75px", height: "75px" }}
          />
        </div>
        <div className="name">
          <h2 className="font-bold text-xl">{selector}</h2>
          <h5 className="text-gray-500 text-sm">{selector}</h5>
        </div>
      </div>
    </>
  );
};
